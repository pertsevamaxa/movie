import { Tabs } from "antd";
import "./tabs.css";

export const Tab = () => {
  return (
    <div className="tabs">
      <Tabs
        items={[
          { label: "Search", key: 1 },
          { label: "Rasted", key: 2 },
        ]}
      />
    </div>
  );
};
