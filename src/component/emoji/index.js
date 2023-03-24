import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Emoji = ({ onSelect }) => {
  return <Picker data={data} onEmojiSelect={onSelect} />;
};

export default Emoji;
