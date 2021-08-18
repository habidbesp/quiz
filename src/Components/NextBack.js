import React from 'react'

export default function NextBack(props) {

    const { ids, prevNext, setPrevNext } = props

    const count = (e) => {
        if (e.target.id === 'prev') {
            setPrevNext((prevState) => (
                prevState - 1
            ));
        }
        else {
            setPrevNext((prevState) => (
                prevState + 1
            ));
        }
    }

    const handleClick = (e) => {
        count(e)
    }

    return (
        <>
        <div className='separator'></div>
        <div className="nextBackSection">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {
                    prevNext <= 0 ?
                        ''
                        :
                        <button id="prev" className="btn btn-outline-primary btn-sm rounded-pill me-md-2" type="button" onClick={handleClick}>Previous Question</button>      
                }
                {
                    prevNext >= ids.length - 1 ?
                        ''
                        :
                        <button id="next"  className="btn btn-outline-primary btn-sm rounded-pill" type="button" onClick={handleClick} >Next Question</button>      
                }
            </div>
        </div>
        </>
    )
}
