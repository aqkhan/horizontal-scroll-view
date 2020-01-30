import React from "react";

export default () => (
    <style>{`
        .mainWrapper{
            position: relative;
        }
        .scrollWrapper{
            width: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            transition: all 0.2s;
            transform: scale(0.98);
            will-change: transform;
            user-select: none;
            cursor: pointer;
            display: flex;
        }
        .scrollWrapper div.items{
            display: flex;
        }
        .scrollWrapper.active{
            cursor: grabbing;
            cursor: -webkit-grabbing;
            transform: scale(1);
        }
        .image-left{
            cursor: pointer;
            position: fixed;
            top: 0;
            left: 0;
            width: 63px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        .image-right{
            cursor: pointer;
            position: fixed;
            top: 0;
            right: 0;
            width: 63px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

        }

    `}</style>
)