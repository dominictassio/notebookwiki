import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import Button from "../button";
import TextBackgroundColorDropdown from "./text-background-color-dropdown";
import TextForegroundColorDropdown from "./text-foreground-color-dropdown";

type EditorToolbarProps = {
  createFormatCmd: (cmd: string, value?: string) => () => void;
};

type EditorToolbarComponent = FunctionComponent<EditorToolbarProps>;

const EditorToolbar: EditorToolbarComponent = ({ createFormatCmd: cmd }) => (
  <Button.Toolbar>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="undo" />}
        onClick={cmd("undo")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="redo" />}
        onClick={cmd("redo")}
      />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="bold" />}
        onClick={cmd("bold")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="italic" />}
        onClick={cmd("italic")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="underline" />}
        onClick={cmd("underline")}
      />
      <Button.None icon={<FontAwesomeIcon icon="strikethrough" />} />
      <Button.None icon={<FontAwesomeIcon icon="subscript" />} />
      <Button.None icon={<FontAwesomeIcon icon="superscript" />} />
    </Button.Group>
    <Button.Group>
      <TextBackgroundColorDropdown />
      <TextForegroundColorDropdown />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="align-left" />}
        onClick={cmd("justifyleft")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="align-center" />}
        onClick={cmd("justifycenter")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="align-right" />}
        onClick={cmd("justifyright")}
      />
      <Button.None icon={<FontAwesomeIcon icon="align-justify" />} />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="list-ol" />}
        onClick={cmd("insertorderedlist")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="list-ul" />}
        onClick={cmd("insertunorderedlist")}
      />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="outdent" />}
        onClick={cmd("outdent")}
      />
      <Button.None
        icon={<FontAwesomeIcon icon="indent" />}
        onClick={cmd("indent")}
      />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="quote-left" />}
        onClick={cmd("formatblock", "blockquote")}
      />
      <Button.None icon={<FontAwesomeIcon icon="quote-right" />} />
    </Button.Group>
    <Button.Group>
      <Button.None
        icon={<FontAwesomeIcon icon="remove-format" />}
        onClick={cmd("removeformat")}
      />
    </Button.Group>
  </Button.Toolbar>
);

export default EditorToolbar;
