import React from "react";

export default function Nav({ sortedData, formatDate }: any) {
  return (
    <ul className="w-full space-y-6">
      {sortedData.map((item: any) => (
        <li key={item.created}>
          <div>{formatDate(item.created)}</div>
        </li>
      ))}
    </ul>
  );
}
