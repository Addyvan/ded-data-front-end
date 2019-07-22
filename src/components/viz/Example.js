import React from "react";
import {XYPlot, MarkSeries} from "react-vis";

class Example extends React.Component {
  render() {
    const { width, height } = this.props;

    return(
      <div>
        <XYPlot width={width} height={width/2}>
          <MarkSeries data={[
            {x: 0, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 3, y: 3},
            {x: 4, y: 4},
            {x: 5, y: 5},
            {x: 6, y: 6}
          ]} />
        </XYPlot>
      </div>
    );
  }
}

export default Example;