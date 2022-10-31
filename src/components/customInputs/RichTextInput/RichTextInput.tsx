import { RichTextEditorProps } from '@mantine/rte'
import { createStyles } from '@mantine/core'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import { InputError } from '@mantine/core/cjs/Input/InputError/InputError.js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import { InputLabel } from '@mantine/core/cjs/Input/InputLabel/InputLabel.js'
import { RichText } from '../RichText'

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
