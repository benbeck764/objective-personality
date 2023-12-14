'use client';
import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { FunctionType } from '@/_models/typed-person-helper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3';
import { FC, useEffect } from 'react';

type HomeVisualDataPoint = {
  name: string;
  children: HomeVisualDataPoint[];
  value?: number;
};

type HomeVisualProps = {
  people: OPSTypedPersonExtended[];
};

// [TODO]
// https://medium.com/react-courses/drawing-basic-charts-with-react-typescript-d3-part-ii-pie-scatter-chart-da4fc653b715
const HomeVisual: FC<HomeVisualProps> = (props: HomeVisualProps) => {
  const { people } = props;

  const getData = (people: OPSTypedPersonExtended[]): HomeVisualDataPoint => {
    const oiPeople = people.filter((p: OPSTypedPersonExtended) =>
      [FunctionType.IntrovertedSensing, FunctionType.IntrovertedIntuition].includes(p.FirstFunction)
    );
    const oePeople = people.filter((p: OPSTypedPersonExtended) =>
      [FunctionType.ExtrovertedSensing, FunctionType.ExtrovertedIntuition].includes(p.FirstFunction)
    );
    const diPeople = people.filter((p: OPSTypedPersonExtended) =>
      [FunctionType.IntrovertedThinking, FunctionType.IntrovertedFeeling].includes(p.FirstFunction)
    );
    const dePeople = people.filter((p: OPSTypedPersonExtended) =>
      [FunctionType.ExtrovertedThinking, FunctionType.ExtovertedFeeling].includes(p.FirstFunction)
    );

    return {
      name: 'people',
      children: [
        {
          name: 'Oi',
          children: oiPeople.map((p: OPSTypedPersonExtended) => {
            return { name: p.Name, children: [], value: oiPeople.length };
          }),
        },
        {
          name: 'Oe',
          children: oePeople.map((p: OPSTypedPersonExtended) => {
            return { name: p.Name, children: [], value: oePeople.length };
          }),
        },
        {
          name: 'Di',
          children: diPeople.map((p: OPSTypedPersonExtended) => {
            return { name: p.Name, children: [], value: diPeople.length };
          }),
        },
        {
          name: 'De',
          children: dePeople.map((p: OPSTypedPersonExtended) => {
            return { name: p.Name, children: [], value: dePeople.length };
          }),
        },
      ],
    };
  };

  const arcVisible = (d: d3.HierarchyRectangularNode<HomeVisualDataPoint>) => {
    return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
  };

  const labelVisible = (d: d3.HierarchyRectangularNode<HomeVisualDataPoint>) => {
    return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
  };

  const labelTransform = (d: d3.HierarchyRectangularNode<HomeVisualDataPoint>) => {
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = ((d.y0 + d.y1) / 2) * radius;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  };

  const data = getData(people);

  const width = 928;
  const height = width;
  const radius = width / 6;

  useEffect(() => {
    d3.select('#svg').remove();
    if (data) initializeChart();
  }, [data]);

  const initializeChart = (): void => {
    // Create the color scale.
    const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

    // Compute the layout.
    const hierarchy = d3
      .hierarchy<HomeVisualDataPoint>(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    const root = d3.partition<HomeVisualDataPoint>().size([2 * Math.PI, hierarchy.height + 1])(
      hierarchy
    );
    //root.each((d) => (d.current = d));

    // Create the arc generator.
    const arc = d3
      .arc<d3.HierarchyRectangularNode<HomeVisualDataPoint>>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius((d) => d.y0 * radius)
      .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

    const viewDiv = d3.select('#chart-view-div');

    // Create the SVG container.
    const svg = viewDiv
      .append('svg')
      .attr('viewBox', [-width / 2, -height / 2, width, width])
      .style('font', '10px sans-serif');

    // Append the arcs.
    const path = svg
      .append('g')
      .selectAll('path')
      .data(root.descendants().slice(1))
      .join('path')
      .attr('fill', (d) => {
        while (d.depth > 1 && d.parent !== null) d = d.parent;
        return color(d.data.name);
      })
      .attr('fill-opacity', (d) => (arcVisible(d) ? (d.children ? 0.6 : 0.4) : 0))
      .attr('pointer-events', (d) => (arcVisible(d) ? 'auto' : 'none'))
      .attr('d', (d) => arc(d));

    // Make them clickable if they have children.
    path.filter((d) => (d.children ? true : false)).style('cursor', 'pointer');
    // .on('click', clicked);

    const format = d3.format(',d');
    path.append('title').text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join('/')}\n${format(d.data.value || 0)}`
    );

    const label = svg
      .append('g')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .style('user-select', 'none')
      .selectAll('text')
      .data(root.descendants().slice(1))
      .join('text')
      .attr('dy', '0.35em')
      .attr('fill-opacity', (d) => +labelVisible(d))
      .attr('transform', (d) => labelTransform(d))
      .text((d) => d.data.name);

    const parent = svg
      .append('circle')
      .datum(root)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('pointer-events', 'all');
    //.on('click', clicked);

    // Handle zoom on click.
    // function clicked(event, p) {
    //    parent.datum(p.parent || root);

    //    root.each(d => d.target = {
    //      x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
    //      x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
    //      y0: Math.max(0, d.y0 - p.depth),
    //      y1: Math.max(0, d.y1 - p.depth)
    //    });

    //   const t = svg.transition().duration(750);

    //   // Transition the data on all arcs, even the ones that aren’t visible,
    //   // so that if this transition is interrupted, entering arcs will start
    //   // the next transition from the desired position.
    //    path.transition(t)
    //        .tween("data", d => {
    //          const i = d3.interpolate(d.current, d.target);
    //          return t => d.current = i(t);
    //        })
    //      .filter(function(d) {
    //        return +this.getAttribute("fill-opacity") || arcVisible(d.target);
    //      })
    //        .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
    //        .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")

    //        .attrTween("d", d => () => arc(d.current));

    //    label.filter(function(d) {
    //        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
    //      }).transition(t)
    //        .attr("fill-opacity", d => +labelVisible(d.target))
    //        .attrTween("transform", d => () => labelTransform(d.current));
    // }
  };

  return (
    <>
      <Typography variant="paragraph">Visual</Typography>
      <Box id="chart-view-div" sx={{ my: 2 }}></Box>
    </>
  );
};

export default HomeVisual;
