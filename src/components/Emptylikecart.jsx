import React from 'react';

const Emptylikecart = () => {
    return (
        <div>
            <div className="likecartempty">
                <div className="none">
                    <img src="img/smile1.png" width={70} height={70} alt=""/>
                    <h2>Закладок нет :(</h2>
                    <h3>Вы ничего не добавляли в закладки</h3>
                    <button className="backbtn d-flex  align-center justify-center"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        &nbsp;&nbsp;&nbsp;&nbsp;Вернуться назад
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Emptylikecart;