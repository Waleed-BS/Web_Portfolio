import React from 'react'
import ToolBoxList from './ToolBoxList'
import ToolBoxPopOver from './ToolBoxPopOver'

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this)
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this)
    this.windowResizeHandler = this.windowResizeHandler.bind(this)
    this.windowClickHandler = this.windowClickHandler.bind(this)
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this)
    this.deactivatePopOver = this.deactivatePopOver.bind(this)

    this.state = {
      items: [
        {
          id: 1,
          label: 'JavaScript',
          description: `Often abbreviated as JS, 
            it is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">language</a>.`,
          comment: `The programming language I use on a daily basis.`,
        },
        {
          id: 2,
          label: 'ES6/ES2015',
          description: `It's a pseudonym for the sixth version of the 
            <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
            ECMAScript</a> aka JavaScript.`,
          comment: `Helped me write complex JavaScript apps using <b>classes</b> and <b>modules</b>, especially with React components.`,
        },
        {
          id: 3,
          label: 'HTML5',
          description: `A markup <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">language</a>  used for structuring and presenting content on the 
            World Wide Web. It is the fifth and current major version of the 
            HTML standard.`,
          comment: `There is no web without HTML.`,
        },
        {
          id: 4,
          label: 'CSS/CSS3',
          description: `Cascading Style Sheets - a style sheet 
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">language</a> 
            used for describing the presentation of a document written in HTML.`,
          comment: `CSS makes the web beautiful.`,
        },
        {
          id: 5,
          label: 'BEM',
          description: `BEM (Block, Element, Modifier) is a component-based 
            <a href="https://en.bem.info/" target="_blank">approach</a> to web development.`,
        },
        {
          id: 6,
          label: 'Git',
          description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
            in computer files and coordinating work on those files among multiple people.`,
          comment: `It saved my life.`,
        },
        {
          id: 7,
          label: 'Github',
          description: `A web-based Git version control repository hosting service.`,
          comment: `This is my <a href="https://github.com/waleed-bs" target="_blank">Github</a>`,
        },
        {
          id: 8,
          label: 'npm',
          description: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
            the JavaScript programming language.`,
        },
        {
          id: 9,
          label: 'Babel',
          description: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
            best known for its ability to turn ES2015 into ES5. It makes ES2015 run in browsers 
            that does not support it directly.`,
          comment: `A <b>must-have</b> tool.`,
        },
        {
          id: 10,
          label: 'Webpack',
          description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
            Webpack takes modules with dependencies and generates static assets representing those modules.`,
        },
        {
          id: 11,
          label: 'SCSS / SASS',
          description: `A style sheet <a href="http://sass-lang.com/" target="_blank">language</a> 
          that is interpreted or compiled into Cascading Style Sheets (CSS).`,
          comment: `SASS helps me write and manage CSS code faster and more efficiently.`,
        },
        {
          id: 12,
          label: 'React',
          description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
            React makes it painless to create interactive UIs. Build encapsulated components 
            that manage their own state and then compose them to make complex UIs.`,
          comment: `I've been in love with React since using it for the first time.`,
        },
        {
          id: 13,
          label: 'Gatsby',
          description: `A static PWA (Progressive Web App) 
            <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, wherever the source is coming from.`,
          comment: `The website you are looking at now is built with Gatsby.`,
        },
        {
          id: 14,
          label: 'PHP',
          description: `A server-side scripting <a href="http://php.net/" target="_blank">language</a> designed primarily 
            for web development but also used as a general-purpose programming language.`,
          comment: `I remember developing a full stack website for a client using it with MySQL. Horrible experience.`,
        },
        {
          id: 15,
          label: 'MySQL',
          description: `MySQL is an <a href="https://www.mysql.com/" target="_blank">RDBMS</a> software which stands for
          relational database management system. It is a Structured Query Language (SQL) 
          that allows keeping the data that exists in a database organized. It is also a component of the LAMP stack 
          (Linux, Apache, MySQL, PHP). 
          MySQL is used by many database-driven web application, including WordPress, and phpBB.`,
          comment: ``,
        },
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: 'auto',
        bottomPX: 'auto',
        leftPx: 'auto',
        rightPx: 'auto',
        description: '',
        comment: '',
      },
      popOverPosition: null,
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.windowResizeHandler, false)
      window.addEventListener('click', this.windowClickHandler, false)
      window.addEventListener('keydown', this.windowKeyDownHandler, false)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.windowResizeHandler, false)
      window.removeEventListener('click', this.windowClickHandler, false)
      window.removeEventListener('keydown', this.windowKeyDownHandler, false)
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which === 27) {
      this.deactivatePopOver()
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver()
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON' ? true : false
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver()
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight,
    }
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0]
    this.positionPopOver(anchor, popOver)

    this.setState(() => ({
      activatedItem: id,
    }))
  }

  positionPopOver(anchor, popOver) {
    const body = document.querySelector('body')

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`
    const leftPx = horizontalPositionOnRight ? `${anchor.offsetLeft}px` : `auto`
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`
    const positionUnderModifierClass = ''

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment,
      },
      popOverPosition: verticalPositionUnder ? 'under' : 'above',
    }))
  }

  popOverOnClickHandler() {
    this.deactivatePopOver()
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false,
      },
      activatedItem: null,
      popOverPosition: null,
    }))
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    )
  }
}

export default ToolBoxListContainer
