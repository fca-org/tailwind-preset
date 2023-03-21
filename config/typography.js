const typography = ( theme ) => ( {
  DEFAULT: {
    css: {
      color: theme( 'colors.gray.700' ),
      maxWidth: 'none',
      hr: {
        borderColor: theme( 'colors.gray.100' ),
        marginTop: '3em',
        marginBottom: '3em',
      },
      'h1, h2, h3': {
        letterSpacing: '-0.025em',
      },
      h2: {
        marginBottom: `${ 16 / 24 }em`,
      },
      h3: {
        lineHeight: '1.4',
        marginTop: '2.4em',
      },
      h4: {
        fontSize: '1.125em',
        marginTop: '2em',
      },
      ul: {
        listStyleType: 'none',
        paddingLeft: 0,
      },
      'ul > li': {
        paddingLeft: '1.75em',
        position: 'relative',
      },
      'ul > li::before': {
        backgroundColor: theme( 'colors.gray.300' ),
        borderRadius: '999px',
        content: '""',
        height: '0.125em',
        left: 0,
        position: 'absolute',
        top: 'calc(0.875em - 0.0625em)',
        width: '0.75em',
      },
      a: {
        borderBottom: `1px solid ${ theme( 'colors.dignity.300' ) }`,
        fontWeight: theme( 'fontWeight.semibold' ),
        textDecoration: 'none',
      },
      'a:hover': {
        borderBottomWidth: '2px',
      },
      'a code': {
        color: 'inherit',
        fontWeight: 'inherit',
      },
      strong: {
        color: theme( 'colors.gray.900' ),
        fontWeight: theme( 'fontWeight.semibold' ),
      },
      'a strong': {
        color: 'inherit',
        fontWeight: 'inherit',
      },
      kbd: {
        background: theme( 'colors.gray.100' ),
        borderColor: theme( 'colors.gray.200' ),
        borderRadius: '4px',
        borderWidth: '1px',
        color: theme( 'colors.gray.700' ),
        fontSize: '0.875em',
        fontVariantLigatures: 'none',
        fontWeight: 500,
        margin: '0 1px',
        padding: '0.125em 0.25em',
      },
      code: {
        fontVariantLigatures: 'none',
        fontWeight: theme( 'fontWeight.medium' ),
      },
      pre: {
        borderRadius: theme( 'borderRadius.xl' ),
        boxShadow: theme( 'boxShadow.md' ),
        color: theme( 'colors.gray.50' ),
        display: 'flex',
        marginBottom: `${ 32 / 14 }em`,
        marginTop: `${ 20 / 14 }em`,
        padding: theme( 'padding.5' ),
      },
      'p + pre': {
        marginTop: `${ -4 / 14 }em`,
      },
      'pre + pre': {
        marginTop: `${ -16 / 14 }em`,
      },
      'pre code': {
        flex: 'none',
        minWidth: '100%',
      },
      table: {
        fontSize: theme( 'fontSize.sm' )[ 0 ],
        lineHeight: theme( 'fontSize.sm' )[ 1 ].lineHeight,
      },
      thead: {
        borderBottomColor: theme( 'colors.gray.200' ),
        color: theme( 'colors.gray.700' ),
      },
      'thead th': {
        fontWeight: theme( 'fontWeight.semibold' ),
        paddingTop: 0,
      },
      'tbody tr': {
        borderBottomColor: theme( 'colors.gray.100' ),
      },
      'tbody tr:last-child': {
        borderBottomWidth: '1px',
      },
      'tbody code': {
        fontSize: theme( 'fontSize.xs' )[ 0 ],
      },
      'figure figcaption': {
        fontStyle: 'italic',
        textAlign: 'center',
      },
      'figure > figcaption': {
        marginTop: `${ 12 / 14 }em`,
      },
    },
  },
} );

module.exports = { typography };
