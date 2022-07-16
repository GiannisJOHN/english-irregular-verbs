import './index.css'

function WordsTable (props) {


    return (
        <>
        <table className="wordsTable">
            <thead>
                <tr>
                    <th>infinitive</th>
                    <th>simple past</th>
                    <th>past participle</th>
                </tr>
            </thead>
            <tbody>
                { 
                 props.words.map((word) => {

                    return (
                        <tr>
                            <td>{word.Infinitive}</td>
                            <td>{word.SimplePast}</td>
                            <td>{word.PastParticiple}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
        {props.words.length === 0 ? <h2 style={{marginTop: '20px', color: '#cbcbcb'}}>nothing found</h2> : null}
        </>
    )
}


export default WordsTable