const React = require('react');
class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon;

        return (
            <div>
                <a href={'/pokemon/'}>BACK</a>
                <h1> "Gotta Catch 'Em All"</h1>
                <p> <h2>The{' '} {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2> </p>
             <p> <img src={pokemon.img} alt="s" /></p> 
            </div>

        )
    }
}

module.exports = Show;