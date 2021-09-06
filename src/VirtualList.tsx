import React, { useState } from "react";

export type VirtualListProps = {
  rowCount: number;
  rowHeight: number;
  rowRenderer: any;
  width?: number;
  height?: number;
};

export default function List({
  rowCount = 10000,
  rowHeight = 32,
  rowRenderer = (rowIndex) => {
    return `Record #${rowIndex}`;
  },
  width = 400,
  height = 600
}: VirtualListProps) {
  let itemHeight = rowHeight + 26;
  let listHeight = itemHeight * rowCount;

  const [scroll, setScroll] = useState({
    indexTop: 0,
    indexEnd: Math.ceil(height / itemHeight)
  });

  const onScroll = ({ currentTarget }) => {
    let newScroll = { ...scroll };
    let indexTop = Math.floor(currentTarget.scrollTop / itemHeight);
    let indexEnd = Math.min(
      rowCount,
      indexTop + Math.ceil(height / itemHeight)
    );
    if (indexTop !== newScroll.indexTop || indexEnd !== newScroll.indexEnd) {
      newScroll.indexTop = indexTop;
      newScroll.indexEnd = indexEnd;
      setScroll(newScroll);
    }
  };

  const getRowsToRender = () => {
    // console.log(scroll.indexTop + " " + scroll.indexEnd);
    let items = [];

    for (let i = scroll.indexTop; i < scroll.indexEnd; i++) {
      items.push(
        <div
          key={i}
          className="virtual-list-row"
          style={{
            height: rowHeight,
            top: `${i * itemHeight}px`
          }}
        >
          <span>{rowRenderer(i)}</span>
        </div>
      );
    }
    return items;
  };

  return (
    <>
      <div
        className="virtual-list"
        style={{
          width: width,
          height: height
        }}
      >
        <div className="virtual-list-block" onScroll={onScroll}>
          <div
            className="virtual-list-items"
            style={{
              height: listHeight
            }}
          >
            {getRowsToRender()}
          </div>
        </div>
      </div>
    </>
  );
}
