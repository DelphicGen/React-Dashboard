import interpolateColors from "../colors/ChromaticColors";

export const chartData = (chartConfig) => {
  const { labels, data, colorRangeInfo, scale, dataLabel } = chartConfig;

  const randomColor = interpolateColors(labels.length, scale, colorRangeInfo);

  return {
    labels: labels,
    datasets: [
      {
        label: dataLabel,
        data,
        backgroundColor: randomColor,
        borderColor: randomColor,
        borderWidth: 1,
      },
    ],
  };
};
