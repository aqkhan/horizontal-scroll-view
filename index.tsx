import React, { useEffect } from "react";
import Style from "./style";

interface propsObject {
    data: {}[];
    Component: React.StatelessComponent<any>;
    wrapperClass?: string;
    scrollLength?: number;
    showControls?: boolean;
}

const HorizontalScroll: React.FC<propsObject>  = (props) => {
    let {data, Component, wrapperClass, scrollLength, showControls} = props;

    useEffect(() => {
        const slider = document.getElementById('scrollWrapper');
        let isDown = false;
        let startX: number;
        let scrollLeft: number;
        if(slider){
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mousemove', (e: MouseEvent): void => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; //scroll-fast
                slider.scrollLeft = scrollLeft - walk;
            });
        }
    });

    const leftRightScroll = (type: string) => {
        const slider = document.getElementById('scrollWrapper');
        if(slider){
            let scrollAmount = 0;
            let slideTimer = setInterval(function(){
                if(type === "left"){
                    slider.scrollLeft -= scrollLength ? scrollLength : 40;
                }else {
                    slider.scrollLeft += scrollLength ? scrollLength : 40;
                }
                scrollAmount += 10;
                if(scrollAmount >= 100){
                    window.clearInterval(slideTimer);
                }
            }, 25);
        }
    };

    return (
        <div className="mainWrapper">
            <div id="scrollWrapper" className={"scrollWrapper "+(wrapperClass ? wrapperClass : "")}>
                <div className="items">
                    {
                        data.map((item, index) => {
                            return <div className="item" key={index}>
                                <Component item={item}/>
                            </div>
                        })
                    }
                </div>
                <Style/>
            </div>
            {
                showControls &&
                <div className="controls">
                    <div className="image-left" onClick={() => leftRightScroll("left")}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" xmlSpace="preserve" width="40px" height="512px"><g><g><g>
                            <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"  className="active-path" fill="#000000"/></g></g></g>
                        </svg>
                    </div>
                    <div className="image-right" onClick={() => leftRightScroll("right")}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492.004 492.004" xmlSpace="preserve" width="40px" height="512px"><g><g><g>
                            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"  className="active-path" fill="#000000"/></g></g></g>
                        </svg>
                    </div>
                </div>
            }
        </div>
    )
};

export default HorizontalScroll;