import '../Books/index.css';

function Card(props) {
    const {thumb, title, author, country, language, link, year, pages} = props.data;
    return (
        <div className='card-wrapper'>
            <h2 className='card-author'>author:{author}</h2>
            <h4 className='card-country'>country:{country}</h4>
            <img className='card-img' src={thumb} width={400} alt="" />
            <h3 className='card-language'>language:{language}</h3>
            <h5 className='card-link'>link:{link}</h5>
            <b className='card-pages'>pages:{pages}</b>
            <h6 className='card-title'>title:{title}</h6>
            <p className='card-year'>year:{year}</p>
        </div>
    );
}