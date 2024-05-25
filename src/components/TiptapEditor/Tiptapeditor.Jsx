import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import styles from "./BlockNoteEditor.module.css";

const BlockNoteEditor = ({ value, onChange }) => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    onChange,
    content: value,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} className={styles.textArea} />;
};

export default BlockNoteEditor;
