import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './FormRow.module.scss'

export default function FormRow({ children, style }) {
    const className = cn(styles.formRow, {
        [styles.formRowHalf]: style === 'half',
        [styles.formRowThird]: style === 'third',
    })

    return <div className={className}>{children}</div>
}

FormRow.propTypes = {
    children: PropTypes.node,
    style: PropTypes.string,
}
