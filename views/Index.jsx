const React = require('react');


        // const { pokemon } = this.props;
        // const pokemon = this.props.pokemon;

        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };
        class Index extends React.Component {
          render() {
        const { pokemon } = this.props;
         

        return (
            <div  style={myStyle} >
                <h1>'See All The Pokemon!'</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>

                <ul>
                    {pokemon.map((pokemon, i) => {
                        return (
                            <ul>
                              
                               
                                <a href={`/pokemon/${i}`}>
                               Name: {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}
                                </a> {' '}<img src={pokemon.img} alt="s" /> <br></br>
                            
                                
                            <br />
                            </ul>
                        )
                    })

                    }
                </ul>
                
            </div>
         
        )
    }
}

module.exports = Index;