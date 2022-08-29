import { RichTextEditorProps } from '@mantine/rte'
import { createStyles } from '@mantine/core'
import { RichText } from '@features/common/components/customInputs/RichText/RichText'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import { InputError } from '../../../../../../node_modules/@mantine/core/esm/Input/InputError/InputError.js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import { InputLabel } from '../../../../../../node_modules/@mantine/core/esm/Input/InputLabel/InputLabel.js'

export const RichTextInput = ({
  onChange,
  error,
  label,
  required,
  value,
  ...other
}: RichTextEditorProps & {
  error: string | null
  label: string
  required: boolean
  value: string
}) => {
  const mantineErrorColor = '#e03131'

  const useErrorStyles = createStyles(() => ({
    richText: {
      borderColor: mantineErrorColor,
      '.quill > .ql-container > .ql-editor.ql-blank::before': {
        color: mantineErrorColor
      },
      color: mantineErrorColor
    }
  }))

  const { classes } = useErrorStyles()

  return (
    <>
      <InputLabel required={required}>{label}</InputLabel>
      <RichText
        className={error ? classes.richText : undefined}
        value={value}
        onChange={onChange}
        {...other}
      />
      {error && (
        <span style={{ marginTop: 10 }}>
          <InputError>{error}</InputError>
        </span>
      )}
    </>
  )
}
