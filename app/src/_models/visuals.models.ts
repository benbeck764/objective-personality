export type HomeVisualDataPoint = {
  name: string;
  children?: HomeVisualDataPoint[];
  value?: number;
};

export type HomeVisualResponseDto = {
  data: HomeVisualDataPoint;
};
