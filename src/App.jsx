
function App() {

  return (
    <main className="h-full container flex flex--center flex--column " id="main">
    
      <h1 className="line-h-1 fs-700 uppercase">Codepraycode!</h1>

      <ul className="socials my-1" role="list">
        <li>
          <a href="https://github.com/codepraycode" title="@codepraycode on Github" data-medium="github">
              <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/codepraycode" title="@codepraycode on Linkedin" data-medium="linkedin">
            <span class="sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/codepraycode" title="@codepraycode on Twitter" data-medium="twitter">
              <span class="sr-only">Twitter</span>
          </a>
        </li>
      </ul>
      <a className="btn" href="https://shrtco.de/rE8SdR" role="button">
        View My CV
      </a>
    </main>
  )
}

export default App
