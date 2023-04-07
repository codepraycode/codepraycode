
function App() {

  return (
    <main className="h-full container flex flex--center " id="main">

      <section className="card flex flex--center flex--column">
      
        <div className="avatar avatar--md">
          <img  alt="Codepraycode's github avatar" src="https://avatars.githubusercontent.com/u/51521181?s=400&u=4ec6b15bc10506a890bcc35cd6d8bf4e67cb50c7&v=4" />
        </div>

        <h1 className="line-h-1 fs-500 fw-500 uppercase">Codepraycode!</h1>

        <ul className="socials" role="list">
          <li>
            <a href="https://github.com/codepraycode" title="@codepraycode on Github" data-medium="github">
                <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/codepraycode" title="@codepraycode on Linkedin" data-medium="linkedin">
              <span className="sr-only">Linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/codepraycode" title="@codepraycode on Twitter" data-medium="twitter">
                <span className="sr-only">Twitter</span>
            </a>
          </li>
        </ul>

        <a className="btn" href="https://shrtco.de/rE8SdR" role="button">
          View My CV
        </a>

      </section>
    </main>
  )
}

export default App
