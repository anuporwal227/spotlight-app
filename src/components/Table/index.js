import React from 'react';
import cls from 'classnames';

import css from './styles.module.scss';


export const Table = ({ containerProps, children, ...props }) => (
    <div className={css.container} {...containerProps}>
        <table {...props} className={cls(css.table, props.className)}>
            {children}
        </table>
    </div>
);

export const TR = ({ children, ...props }) => (
    <tr {...props}>
        {children}
    </tr>
);

export const THead = ({ children, rowProps, ...props }) => (
    <thead {...props}>
    <TR {...rowProps}>{children}</TR>
    </thead>
);


export const TH = ({ children, ...props }) => (
    <th {...props} className={cls(css.th, props.className)}>{children}</th>
);

export const TBody = ({ children, ...props }) => (
    <tbody {...props}>{children}</tbody>
);

export const TD = ({ children, ...props }) => (
    <td {...props} className={cls(css.cell, props.className)}>{children}</td>
);