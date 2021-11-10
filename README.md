# form-controls

## Install

```bash
npm install --save @leffot/form-controls
```

## Usage

```jsx
import { Formik, Form } from 'formik'
import { FormRow, TextInput } from '@leffot/form-controls'

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
