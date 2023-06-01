import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface RichTextProps {
  value?: any;
  onChange?: (value: any) => void;
}

const RichText = (props: RichTextProps) => {
  const { value, onChange } = props;

  const [initialValue, setInitialValue] = useState<any>();

  const ref = useRef();

  useEffect(() => {
    setInitialValue(value);
  }, []);

  return (
    <Editor
      initialValue={initialValue}
      tinymceScriptSrc={'/script/tinymce/tinymce.min.js'}
      onInit={(evt, editor: any) => {
        ref.current = editor;
      }}
      onEditorChange={(a: string, editor) => {
        if (onChange) {
          onChange(a);
        }
      }}
      init={{
        language_url: 'script/tinymce/langs/zh-Hans.js',
        language: 'zh-Hans',
        height: 300,
        plugins:
          'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
        menubar: 'file edit view insert format tools table help',
        toolbar:
          'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        quickbars_selection_toolbar: 'bold italic | blocks | quicklink blockquote',
        quickbars_insert_toolbar: 'quickimage quicktable | hr',
        toolbar_sticky: true,
        toolbar_sticky_offset: window.matchMedia('(max-width: 1023.5px)').matches ? 102 : 108,
      }}
    />
  );
};
export default RichText;
