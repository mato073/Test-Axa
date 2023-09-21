import { memo, useRef, useEffect } from 'react';
import * as d3 from "d3";
import { DataPoint } from '../../types/stock';
import './style.scss'

interface ChartProps {
    data: DataPoint[]
}

const Chart = memo(({ data }: ChartProps) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const width = 900;
        const height = 400;
        const svg = d3.select(chartRef.current)
            .attr("width", width)
            .attr("height", height)
            .style('overflow', 'visible')

        const xDomain = d3.extent(data, d => new Date(d.timestamp))
        const yDomain = d3.extent(data, d => Number(d.stocks))
        if (xDomain[0] && xDomain[1] && yDomain[0] && yDomain[1]) {

            const xScale = d3.scaleTime()
                .domain(xDomain)
                .range([0, width])

            const yScale = d3.scaleLinear()
                .domain(yDomain)
                .range([height, 0])

            const line = d3.line<DataPoint>()
                .x(d => xScale(new Date(d.timestamp)))
                .y(d => yScale(Number(d.stocks)))

            const xAxis = d3.axisBottom(xScale)
                .ticks(data.length)
                .tickFormat((value) => {
                    if (typeof value === 'number') {
                        return value.toString();
                    } else if (value instanceof Date) {
                        return d3.timeFormat("%b %d")(value);
                    } else {
                        return '';
                    }
                });

            const yAxis = d3.axisLeft(yScale)
                .ticks(8)
            svg.append("g")
                .call(xAxis)
                .attr("transform", `translate(0, ${height})`)
            svg.append("g")
                .call(yAxis)
                .attr("transform", `translate(0, 0)`);

            svg.selectAll(".line")
                .data([data])
                .join("path")
                .attr("class", "line")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 3)
        }

    }, [data]);

    return <div data-testid="chart" className='chart'>
        <div>
            <svg ref={chartRef} />
        </div>
    </div>;
});

export default Chart;