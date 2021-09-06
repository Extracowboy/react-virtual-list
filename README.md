an example of virtualization without any custom libraries (using **typescript** & **react functional component**)

usage:
```
<List
  rowCount={10000}
  rowHeight={32}
  rowRenderer={(rowIndex) => {
    return `This is record #${rowIndex}`;
  }}
  width={500}
  height={600}
/>
```

* rowCount - number of rows to generate
* rowHeight - height of row block
* rowRenderer - returns text of generated block
* width & height - window dimensions where to render rows

in short - it counts the amount of visible rows inside window (when you scroll) by some easy mathematical calculations and re-renders them if indexes of visible rows change
