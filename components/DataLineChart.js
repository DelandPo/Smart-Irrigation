import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import {
  VictoryArea,
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryAxis,
  VictoryLegend
} from "victory-native";
import InvalidData from "./InvalidData";

const axisLabel = { fontSize: 15, padding: 24 };
const tickLabels = { fontSize: 10 };
const angledTickLabels = { fontSize: 10, angle: -60 };

function getTickValues(maxDay, useWeeks) {
  if (useWeeks) {
    return [0, 7, 14, 21, 28, 35, 42, 49, 56, 63].filter(x => x <= maxDay + 6);
  }
  if (maxDay <= 10) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x <= maxDay);
  }
  return [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].filter(
    x => x <= maxDay + 4
  );
}

const DataLineChart = ({
  data,
  xAxisField,
  xAxisLabel,
  formatX,
  yAxisLabel,
  formatY,
  lines,
  legendX,
  legendY,
  angleYTicks,
  useLegend = true,
  maxDay = 45,
  useWeeks = false
}) => {
  if (!checkData(data, lines, xAxisField)) {
    return <InvalidData />;
  }
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ left: 60, top: 50, right: 60, bottom: 50 }}
    >
      <VictoryAxis
        label={xAxisLabel}
        style={{ axisLabel, tickLabels }}
        tickFormat={formatX}
        tickValues={getTickValues(maxDay, useWeeks)}
      />
      <VictoryAxis
        dependentAxis
        label={yAxisLabel}
        tickFormat={formatY}
        style={{
          axisLabel,
          tickLabels: angleYTicks ? angledTickLabels : tickLabels
        }}
      />
      {renderLines(lines, data, xAxisField)}
      {renderLegend(lines, legendX, legendY, useLegend)}
    </VictoryChart>
  );
};

function checkData(data, lines, xAxisField) {
  return !lines.some(line => data.some(x => Number.isNaN(x[line.yAxisField])));
}

const renderLines = (lines, data, xAxisField) => {
  return lines.map(l => {
    const { yAxisField, fill, stroke } = l;
    const filteredData = data.filter(x => _.isNumber(x[yAxisField]));
    if (filteredData.length < 2 || l.dataPointsOnly) {
      return (
        <VictoryScatter
          key={stroke}
          data={filteredData}
          x={xAxisField}
          y={yAxisField}
          style={{
            data: { fill }
          }}
          symbol={l.symbol || "circle"}
        />
      );
    }
    return fill ? (
      <VictoryArea
        key={stroke}
        data={filteredData}
        x={xAxisField}
        y={yAxisField}
        style={{
          data: { stroke, fill, strokeWidth: 2 }
        }}
      />
    ) : (
      <VictoryLine
        key={stroke}
        data={filteredData}
        x={xAxisField}
        y={yAxisField}
        style={{
          data: { stroke, strokeWidth: 2 }
        }}
      />
    );
  });
};

const renderLegend = (lines, legendX, legendY, useLegend) => {
  const data = lines.map(l => ({
    name: l.legend,
    symbol: {
      fill: l.stroke,
      type: l.symbol || "circle"
    }
  }));
  if (useLegend) {
    return (
      <VictoryLegend
        x={legendX}
        y={legendY}
        orientation="horizontal"
        gutter={10}
        style={{ title: { fontSize: 20 } }}
        data={data}
      />
    );
  }
};

DataLineChart.defaultProps = {
  formatX: x => x,
  formatY: y => y,
  yAxisLabel: "",
  legendX: 125,
  legendY: 10,
  angleYTicks: false,
  maxDay: 45,
  useWeeks: false
};

DataLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  xAxisField: PropTypes.string.isRequired,
  xAxisLabel: PropTypes.string.isRequired,
  formatX: PropTypes.func,
  yAxisLabel: PropTypes.string.isRequired,
  formatY: PropTypes.func,
  lines: PropTypes.array.isRequired,
  legendX: PropTypes.number,
  legendY: PropTypes.number,
  angleYTicks: PropTypes.bool,
  useLegend: PropTypes.bool,
  maxDay: PropTypes.number,
  useWeeks: PropTypes.bool
};

export default DataLineChart;
