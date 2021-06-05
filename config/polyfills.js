const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable()
  window.Promise = require('promise/lib/es6-extensions.js')
}

// fetch() polyfill for making API calls.
require('whatwg-fetch')

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign')

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global)
  jest.mock('multiprova-editor', function() {
    return { Editor: function() {} }
  })

  jest.mock('images/dificuldadeDificil.png', function() {})
  jest.mock('images/dificuldadeFacil.png', function() {})
  jest.mock('images/dificuldadeMedio.png', function() {})
  jest.mock('icons/ExpandMoreIcon', function() {
    return {
      ExpandMoreIcon: function(props) {
        return props.children
      },
    }
  })

  jest.mock('icons', function() {
    return {
      PinIcon: function(props) {
        return props.children
      },
      GrupoIcon: function(props) {
        return props.children
      },
    }
  })

  jest.mock('icons/PinOnOffIcon', function() {
    return {
      PinOnOffIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/BlocoIcon', function() {
    return {
      BlocoIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/ImportIcon', function() {
    return {
      ImportIcon: function(props) {
        return props.children
      },
    }
  })

  jest.mock('icons/ExportIcon', function() {
    return {
      ExportIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/MultiplaEscolhaIcon', function() {
    return {
      MultiplaEscolhaIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/AssociacaoDeColunasIcon', function() {
    return {
      AssociacaoDeColunasIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/VouFIcon', function() {
    return {
      VouFIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/RedacaoIcon', function() {
    return {
      RedacaoIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/DeleteIcon', function() {
    return {
      DeleteIcon: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/QuadradoIcon.svg', function() {
    return {
      quadrado: function(props) {
        return props.children
      },
    }
  })
  jest.mock('icons/CancelarIcon', function() {
    return {
      CancelarIcon: function(props) {
        return props.children
      },
    }
  })
}
