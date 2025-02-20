import React from 'react';
import {HeadingXLarge, HeadingLarge, LabelLarge, HeadingSmall, LabelMedium, HeadingXSmall} from 'baseui/typography';
import presentation from '../components/presentation.png';

import {Avatar} from "baseui/avatar";
import BasketBall from '../components/basketball.png';
import ICSME from '../components/ICSME.png';
import slide1 from '../components/slide1.png';
import slide2 from '../components/slide2.png';
import slide3 from '../components/slide3.png';
import slide4 from '../components/slide4.png';
import slide5 from '../components/slide5.png';
import slide6 from '../components/slide6.png';
import { IoLogoGithub } from "react-icons/io";
import { StyledLink } from "baseui/link";
import { ListItem, ListItemLabel } from "baseui/list";
import {Card} from "baseui/card";
import { Check, ArrowRight } from "baseui/icon";
import {StarRating} from "baseui/rating";
import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";
import {Pagination} from "baseui/pagination";
import software from '../components/software.png';

export default function Study(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const slideNum = 6
    const images = [slide1, slide2, slide3, slide4, slide5, slide6]
    const [currentPage, setCurrentPage] = React.useState(3);
    return (
        <>
            <LabelLarge>
                Study
            </LabelLarge>
            <Column title={"概要"}>
                開発者は識別子を名前変更した際，同じ意図で命名された他の識別子も名前変更を行う必要がある
                が，労力がかかる．既存の名前変更推薦手法では，識別子間の関係性に基づく推薦の連鎖として名前変更
                を推薦するが，変更操作が適用できない識別子があれば以降の推薦を行わず，推薦漏れが生じる．本論文
                では，識別子間の関係性と類似性に基づき，候補に優先度を付与して名前変更推薦を行う手法 RENAS-p
                を提案する．関係性がある識別子，用いられる語彙が類似する識別子は同時に名前変更される傾向が高い
                ため，関係性に基づく優先度，類似性の優先度を定義し，これらが高いものを推薦する．RENAS-p を評
                価した結果，既存手法より F 値が 0.1 以上向上した．また，関係性のみや類似性のみを考慮した場合に比
                べて，双方を利用する RENASが精度良く推薦を行えた．
            </Column>
            <Column title="内容概要">
            <img src={images[currentPage-1]}/>
            <Pagination
                numPages={slideNum}
                currentPage={currentPage}
                onPageChange={({ nextPage }) => {
                    var nextPage = Math.min(Math.max(nextPage, 1), 20);
                    setCurrentPage(nextPage);
                }}
                />
            </Column>
            <Column title={"発表実績"}>
                    <div className="pl-6">
                        <div className="flex">
                            <a href="https://www.sigse.jp/" className="basis-1/5 pt-2"><img src={software}></img></a>
                        </div>
                        <LabelLarge className="my-1">2024年3月：ソフトウェア工学研究会</LabelLarge>
                        <div className="flex">
                            <a href="https://conf.researchr.org/home/icsme-2024" className="basis-1/5 pt-4"><img src={ICSME}></img></a>
                        </div>
                        <LabelLarge className="my-1">2024年10月： The International Conference on Software Maintenance and Evolution (Research Track)</LabelLarge>
                        <LabelLarge className="my-2">2024年10月：The International Conference on Software Maintenance and Evolution (Artifact Evaluation Track and ROSE Festival Track)</LabelLarge>
                    </div>
                    <HeadingXSmall className="pt-3">賞</HeadingXSmall>
                    <div className="pl-6">
                        <StyledLink href="https://www.ipsj.or.jp/award/se-award1.html"><LabelLarge className="text-white">学生研究賞</LabelLarge></StyledLink>
                        <StyledLink href="https://www.ipsj.or.jp/award/yamasita2024-detail.html" ><LabelLarge className="text-white">山下記念研究賞</LabelLarge></StyledLink>
                </div>
            </Column>
            <figure>
                <img src={presentation} width={600}></img>
                <figcaption><LabelLarge>発表の様子</LabelLarge></figcaption>
            </figure>
        </>
    );
}

function Column({title, children}){
    return(
        <div>
            <HeadingSmall className="pt-4">{title}</HeadingSmall>
            <div className="pl-4 pt-2"><LabelMedium><div className="leading-6">{children}</div></LabelMedium></div>
            <hr className="border-gray-500 my-8 w-full" />
        </div>
    );
}
