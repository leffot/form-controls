# form-controls

> A library of React components to use with Formik forms.

[![NPM](https://img.shields.io/npm/v/form-controls.svg)](https://www.npmjs.com/package/@leffot/form-controls) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @leffot/form-controls
```

## Usage

```jsx
import { Formik, Form } from 'formik'
import { FormRow, TextInput } from '@leffot/form-controls'
import '@leffot/form-controls/dist/index.css'

function Example() {
    return (
        <Formik initialValues={{ emailAddress: '' }}>
            {() => (
                <Form>
                    <FormRow>
                        <TextInput
                            id='emailAddress'
                            label='Email'
                            name='emailAddress'
                            placeholder='you@example.com'
                            type='email'
                        />
                    </FormRow>
                </Form>
            )}
        </Formik>
    )
}
```

## License

MIT © [leffot](https://github.com/leffot)
