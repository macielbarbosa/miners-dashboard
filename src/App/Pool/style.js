export const style = () => ({
  root: {},
  header: {
    display: 'flex',
    '& > img': {
      height: 20,
      alignSelf: 'center',
      marginRight: 10,
    },
  },
  wallet: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
