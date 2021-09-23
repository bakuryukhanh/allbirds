import { Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

export const CollapseInfo = () => {
  return (
    <div>
      <Collapse
        defaultActiveKey={["1"]}
        accordion
        className="bg-transparent font-semibold"
        bordered={false}
      >
        <Panel header="Core Feature" key={1}>
          <ul className="list-disc ml-5 font-light">
            <li>Renewabel Material</li>
            <li>Machine Washable</li>
            <li>Minimized Odor</li>
            <li>Movement Comfortable</li>
          </ul>
        </Panel>
        <Panel header="Description" key={2}>
          <p className="font-light">
            Combining cozy ZQ Merino wool and a bio-based water repellent
            shield, our rain-ready sneaker keeps your feet predictably dry in
            unpredictable weather. Made in Busan, South Korea
          </p>
        </Panel>
        <Panel header="Shipping and Returns" key={3}>
          <p className="font-light">
            Free shipping on orders over $50, and our 30 days, no questions
            asked return policy. Lightly worn shoes get donated to Soles4Souls.
          </p>
        </Panel>
        <Panel header="Care Guide" key={4}>
          <p className="font-light">
            Pullout the insoles and laces. Slip your shoes into a delicates bag
            and toss them in the washing machine—gentle cycle with cold water
            with your favorite mild detergent. When they’re done, shake off any
            excess water and let them air dry.
            <br /> Handy tips: Don’t put them in the dryer. And don’t worry,
            they’ll go back to their original shape in no time. You can hand
            wash your laces and insoles on their own.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};
