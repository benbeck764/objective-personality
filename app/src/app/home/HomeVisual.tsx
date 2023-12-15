'use client';
import { HomeVisualDataPoint } from '@/_models/visuals.models';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as d3 from 'd3';
import { FC, useEffect } from 'react';

type HomeVisualProps = {
  data: HomeVisualDataPoint;
};

// [TODO]
// https://medium.com/react-courses/drawing-basic-charts-with-react-typescript-d3-part-ii-pie-scatter-chart-da4fc653b715
const HomeVisual: FC<HomeVisualProps> = (props: HomeVisualProps) => {
  const { data } = props;

  const width = 528;
  const height = width;
  const radius = width / 6;

  let root: d3.HierarchyRectangularNode<HomeVisualDataPoint>;
  let arc: d3.Arc<any, d3.HierarchyRectangularNode<HomeVisualDataPoint>>;
  let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  let path: d3.Selection<
    d3.BaseType | SVGPathElement,
    d3.HierarchyRectangularNode<HomeVisualDataPoint>,
    SVGGElement,
    unknown
  >;
  let parent: d3.Selection<
    SVGCircleElement,
    d3.HierarchyRectangularNode<HomeVisualDataPoint>,
    HTMLElement,
    any
  >;
  let label: d3.Selection<
    d3.BaseType | SVGTextElement,
    d3.HierarchyRectangularNode<HomeVisualDataPoint>,
    SVGGElement,
    unknown
  >;

  useEffect(() => {
    d3.select('#svg').remove();
    if (data) initializeChart();
  }, [data]);

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

  // Handle zoom on click.
  const clicked = (event: PointerEvent, p: d3.HierarchyRectangularNode<HomeVisualDataPoint>) => {
    parent.datum(p.parent || root);

    root.each((d: d3.HierarchyRectangularNode<HomeVisualDataPoint>) => {
      d = {
        ...d,
        x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - p.depth),
        y1: Math.max(0, d.y1 - p.depth),
      } as d3.HierarchyRectangularNode<HomeVisualDataPoint>;
    });

    const t = svg.transition().duration(750) as d3.Transition<any, unknown, HTMLElement, any>;

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.

    path
      .transition(t)
      .tween('data', (d) => {
        const i = d3.interpolate(d, p);
        return (t) => (d = i(t));
      })
      .filter(function (d: d3.HierarchyRectangularNode<HomeVisualDataPoint>) {
        //return +this.getAttribute('fill-opacity') || arcVisible(d);
        return arcVisible(d);
      })
      .attr('fill-opacity', (d) => (arcVisible(p) ? (d.children ? 0.6 : 0.4) : 0))
      .attr('pointer-events', (d) => (arcVisible(p) ? 'auto' : 'none'))
      .attrTween('d', (d) => () => arc(d) ?? '');

    // label
    //   .filter(function (d) {
    //     return +this.getAttribute('fill-opacity') || labelVisible(d);
    //   })
    //   .transition(t)
    //   .attr('fill-opacity', (d) => +labelVisible(d))
    //   .attrTween('transform', (d) => () => labelTransform(d));
  };

  const initializeChart = (): void => {
    // Create the color scale.
    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, data.children ? data.children?.length + 1 : 0)
    );

    // Compute the layout.
    const hierarchy = d3
      .hierarchy<HomeVisualDataPoint>(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    root = d3.partition<HomeVisualDataPoint>().size([2 * Math.PI, hierarchy.height + 1])(hierarchy);

    // Create the arc generator.
    arc = d3
      .arc<d3.HierarchyRectangularNode<HomeVisualDataPoint>>()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius((d) => d.y0 * radius)
      .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

    const viewDiv = d3.select('#chart-view-div');

    // Create the SVG container.
    svg = viewDiv
      .append('svg')
      .attr('viewBox', [-width / 2, -height / 2, width, width])
      .style('font', '10px sans-serif');

    // Append the arcs.
    path = svg
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
    path
      .filter((d) => (d.children ? true : false))
      .style('cursor', 'pointer')
      .on('click', clicked);

    const format = d3.format(',d');
    path.append('title').text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join('/')}\n${format(d.data.value || 0)}`
    );

    label = svg
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

    parent = svg
      .append('circle')
      .datum(root)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('click', clicked);
  };

  return (
    <Stack alignItems="center" justifyContent="center" my={2}>
      <Box width={900} height={900} id="chart-view-div" />
    </Stack>
  );
};

export default HomeVisual;
