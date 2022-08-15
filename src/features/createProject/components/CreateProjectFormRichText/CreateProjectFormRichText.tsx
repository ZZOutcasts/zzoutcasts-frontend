import { useState } from 'react'
import { Delta, Sources } from 'quill'
import { Editor, RichTextEditorProps } from '@mantine/rte'
import { RichTextInput } from '@features/common/components/customInputs/RichTextInput'

export const CreateProjectFormRichText = ({
  onChange,
  value: givenValue,
  ...other
}: RichTextEditorProps & {
  error: string | null
  label: string
  required: boolean
  value: string
}) => {
  const [value, setValue] = useState(givenValue || '')

  const handleChange = (
    newValue: string,
    delta: Delta,
    sources: Sources,
    editor: Editor.UnprivilegedEditor
  ) => {
    onChange && onChange(newValue, delta, sources, editor)
    setValue(newValue)
  }

  return (
    <RichTextInput
      onChange={handleChange}
      {...other}
      required
      value={value}
      controls={[
        ['bold', 'strike', 'italic', 'underline'],
        ['h1', 'h2', 'h3', 'h4'],
        ['unorderedList', 'orderedList'],
        ['link']
      ]}
    />
  )
}
