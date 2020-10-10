class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("/data")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    loaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, loaded, items } = this.state;

        if (error)
            return <div>Ошибка: {error.message}</div>;
        else if (!loaded)
            return <div>Загрузка...</div>;
        else {
            return (
                <div>
                    <p>My name is {this.props.name}, i'm load:</p>
                    <ul>
                        {items.map((page, p) => {
                            return (
                                page.elements.map((el, i) => <li key={el.name}>{el.name} {el.label}</li>)
                            );
                        } ) }
                    </ul>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Component name="Autoform"/>,
    document.getElementById("content")
);