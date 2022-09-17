import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import GlobalStyle  from './styles/globalStyle'
import basicTheme from './styles/themes/default'

const App:React.FC = () => {
  	return (
  	  	<>
			<ThemeProvider theme={basicTheme}>
  	  		<GlobalStyle />
  	  			<Header />
				<Main/>
			</ThemeProvider>
  	 	</>
  	)
}

export default App
