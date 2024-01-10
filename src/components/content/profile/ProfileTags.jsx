import React from "react";
import LabeledContent from "../../common/LabeledContent";
import { ChipCtn, ToggleChip } from "../../common/Button";
import { useState } from "react";

export default function ProfileTags() {
  const tags = ["Influencer", "Singer", "Model", "Dancer", "Comedian"];
  const [tagSelected, setTagSelected] = useState(
    Array(tags.length).fill(false)
  );

  const toggleTag = (i) => {
    let newData = [...tagSelected];
    newData[i] = !tagSelected[i];
    setTagSelected(newData);
  };
  return (
    <LabeledContent title={"Tags"}>
      <ChipCtn>
        {tags.map((name, i) => (
          <ToggleChip
            $select={tagSelected[i]}
            key={name}
            onClick={() => {
              toggleTag(i);
            }}
          >
            {name}
          </ToggleChip>
        ))}
      </ChipCtn>
    </LabeledContent>
  );
}
