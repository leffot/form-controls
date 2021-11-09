import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
    Checkbox,
    Fieldset,
    FormRow,
    InputLabel,
    Radio,
    Recaptcha,
    Select,
    Textarea,
    TextInput,
} from 'form-controls'
import styles from './App.module.scss'

export default function App() {
    const REQUIRED = 'Required'
    const SELECT_PLACEHOLDER = 'Select an option...'

    const initialValues = {
        textInput: '',
        emailInput: '',
        radio: '',
        radioRectangle: '',
        select: 'Select an option...',
        checkbox: {
            events: '',
            newReleases: '',
        },
        checkboxRectangle: {
            shoe: '',
            boot: '',
            loafer: '',
        },
        red: '',
        green: '',
        blue: '',
        textarea: '',
        recaptcha: '',
    }

    const validationSchema = Yup.object({
        textInput: Yup.string().required(REQUIRED),
        emailInput: Yup.string()
            .email(
                'Please enter a valid email address, such as user@example.com.'
            )
            .required(REQUIRED),
        radio: Yup.string(),
        radioRectangle: Yup.string(),
        select: Yup.string()
            .required(REQUIRED)
            .notOneOf([SELECT_PLACEHOLDER], REQUIRED),
        checkbox: Yup.object({
            events: Yup.string(),
            newReleases: Yup.string(),
        }),
        checkboxRectangle: Yup.object({
            shoe: Yup.string(),
            boot: Yup.string(),
            loafer: Yup.string(),
        }),
        red: Yup.string(),
        green: Yup.string(),
        blue: Yup.string(),
        textarea: Yup.string(),
        recaptcha: Yup.string().required(REQUIRED),
    })

    const createUUID = () => {
        const ff = s => {
            const pt = (Math.random().toString(16) + '000000000').substr(2, 8)
            return s ? '-' + pt.substr(0, 4) + '-' + pt.substr(4, 4) : pt
        }

        return ff() + ff(true) + ff(true) + ff()
    }

    const selectOptions = []
    for (let i = 0; i < 10; i++) {
        const UUID = createUUID()
        selectOptions.push(
            <option value={UUID} key={i}>
                {UUID}
            </option>
        )
    }

    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form>
                        <h1 className={styles.header}>Form Controls</h1>
                        <FormRow>
                            <TextInput
                                id='textInput'
                                label='Text Input'
                                name='textInput'
                                placeholder='A string of text'
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                id='emailInput'
                                label='Email Input'
                                name='emailInput'
                                placeholder='you@example.com'
                                type='email'
                            />
                        </FormRow>
                        <Fieldset>
                            <InputLabel label='Radio' />
                            <FormRow>
                                <Radio
                                    id='radio-one'
                                    label='One'
                                    name='radio'
                                    value='One'
                                />
                                <Radio
                                    id='radio-two'
                                    label='Two'
                                    name='radio'
                                    value='Two'
                                />
                                <Radio
                                    id='radio-three'
                                    label='Three'
                                    name='radio'
                                    value='Three'
                                />
                            </FormRow>
                        </Fieldset>
                        <Fieldset>
                            <InputLabel label='Rectangle Radio' />
                            <FormRow style='half'>
                                <Radio
                                    id='radioRectangle-one'
                                    label='Alden'
                                    name='radioRectangle'
                                    style='rectangle'
                                    value='Alden'
                                />
                                <Radio
                                    id='radioRectangle-two'
                                    label='Edward Green'
                                    name='radioRectangle'
                                    style='rectangle'
                                    value='Edward Green'
                                />
                                <Radio
                                    disabled={true}
                                    id='radioRectangle-three'
                                    label='John Lobb'
                                    name='radioRectangle'
                                    style='rectangle'
                                    value='John Lobb'
                                />
                                <Radio
                                    id='radioRectangle-four'
                                    label='Norman Vilalta'
                                    name='radioRectangle'
                                    style='rectangle'
                                    value='Norman Vilalta'
                                />
                            </FormRow>
                        </Fieldset>
                        <FormRow>
                            <Select
                                hideLabel={false}
                                id='select'
                                label='Select'
                                name='select'
                                options={selectOptions}
                                placeholder={SELECT_PLACEHOLDER}
                            />
                        </FormRow>
                        <Fieldset>
                            <InputLabel label='Checkbox' />
                            <FormRow>
                                <Checkbox name='checkbox.events'>
                                    Events
                                </Checkbox>
                                <Checkbox name='checkbox.newReleases'>
                                    New Releases
                                </Checkbox>
                            </FormRow>
                        </Fieldset>
                        <Fieldset>
                            <InputLabel label='Rectangle Checkbox' />
                            <FormRow style='third'>
                                <Checkbox
                                    name='checkboxRectangle.shoe'
                                    style='rectangle'
                                >
                                    Shoe
                                </Checkbox>
                                <Checkbox
                                    name='checkboxRectangle.boot'
                                    style='rectangle'
                                >
                                    Boot
                                </Checkbox>
                                <Checkbox
                                    name='checkboxRectangle.loafer'
                                    style='rectangle'
                                >
                                    Loafer
                                </Checkbox>
                            </FormRow>
                        </Fieldset>
                        <Fieldset>
                            <InputLabel label='Color Checkbox' />
                            <FormRow style='third'>
                                <Checkbox name='red' style='Color Checkbox'>
                                    Red
                                </Checkbox>
                                <Checkbox name='green' style='Color Checkbox'>
                                    Green
                                </Checkbox>
                                <Checkbox name='blue' style='Color Checkbox'>
                                    Blue
                                </Checkbox>
                            </FormRow>
                        </Fieldset>
                        <FormRow>
                            <Textarea
                                label='Textarea'
                                id='textarea'
                                name='textarea'
                                placeholder='A long string of text, maybe several paragraphs...'
                            />
                        </FormRow>
                        <FormRow>
                            <InputLabel label='reCAPTCHA' />
                            <Recaptcha
                                name='recaptcha'
                                sitekey={process.env.REACT_APP_SITEKEY}
                            />
                        </FormRow>
                        <FormRow>
                            <button className={styles.button} type='submit'>
                                Submit
                            </button>
                        </FormRow>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
