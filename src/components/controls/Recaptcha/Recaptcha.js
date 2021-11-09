import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'

import { ValidationError } from '../../common'

export default function Recaptcha({ name, sitekey }) {
    const { setFieldValue } = useFormikContext()
    const field = useField({ name })

    const onRecaptchaComplete = value => {
        setFieldValue(name, value)
    }

    return (
        <>
            <ReCAPTCHA sitekey={sitekey} onChange={onRecaptchaComplete} />
            <ValidationError meta={field[1]} />
        </>
    )
}

Recaptcha.propTypes = {
    name: PropTypes.string,
    sitekey: PropTypes.string,
}
