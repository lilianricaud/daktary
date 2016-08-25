{
  layout.home = new Layout('home')
  layout.home.html(`
  <main>
    <section class="home-intro">
        <div class="home-intro-content container">
          <h2>S'inspirer des autres cultures<span>Rédiger et partager vos expériences</span></h2>
          <a href="#multibao/contributions/blob/master/pages/commencer_ici.md">Commencer ici</a>
          <a href="#lilianricaud/open-social-innovation/blob/master/what-is-open-social-innovation.md">About Open Social Innovation</a>
        </div>
    </section>
    <section id="gh-crew-list" class="container">
      <ul data-template="crews">
      </ul>
    </section>
  </main>`)
}
