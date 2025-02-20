import React from 'react';
import {HeadingXLarge, HeadingSmall, HeadingXSmall, LabelLarge, LabelMedium} from 'baseui/typography';
import {Avatar} from "baseui/avatar";
import BasketBall from '../assets/basketball.png';
import ICSME from '../assets/ICSME.png';
import software from '../assets/software.png';
import { IoLogoGithub } from "react-icons/io";
import { StyledLink } from "baseui/link";
import { ListItem, ListItemLabel } from "baseui/list";
import {Card} from "baseui/card";
import { Check, ArrowRight } from "baseui/icon";
import {StarRating} from "baseui/rating";
import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";


function InfoArea({title, body}){ 
    return(
        <div className="pt-8">
            <div className="flex items-center">
                <Check size={35} color={'#fff'} className="mt-1"/>
                <HeadingSmall>{title} </HeadingSmall>
            </div>
            <div className="pl-2 pt-2">
                <LabelLarge>
                    {body}
                </LabelLarge>
            </div>
        </div>
    );
}


export default function Home(){
    return (
        <div>
            <HeadingXLarge>Home</HeadingXLarge>
            <div className="pt-6 pl-2 mx-4">
                <div className="flex items-end">
                    <HeadingXLarge className=" tracking-normal">Doi's Info</HeadingXLarge>
                    <Avatar 
                    name="Doi"
                    size="scale1200"
                    src={BasketBall} 
                    />
                </div>
                <div className="pt-2">
                    <StyledLink href="https://github.com/doinaoki">
                        <IoLogoGithub size={40} color={'#fff'} />
                    </StyledLink>
                </div>
            </div>
            <div className="pl-8">
                <InfoArea title="About Me" body={
                    <div className="leading-8 pl-7">
                        <div>所属：東京科学大学　情報理工学院</div> 
                        <div>趣味：バスケットボール、ダーツ</div>
                    </div>
                } 
                    />
                <InfoArea title="Programming" body={
                    <div className="leading-8 pl-7">
                        <StyledLink href="#/programming"><LabelMedium><ArrowRight size={20}/>詳細はprogrammingへ</LabelMedium></StyledLink>
                        <HeadingXSmall className="pb-3 pt-3">得意な言語順</HeadingXSmall>
                        <Language/>
                    </div>
                } 
                />
                <InfoArea title="Study" body={
                    <div className="pl-7">
                        <StyledLink href="#/study"><LabelMedium><ArrowRight size={20}/>詳細はstudyへ</LabelMedium></StyledLink>
                        <HeadingXSmall className="pb-2 pt-3">研究概要</HeadingXSmall> 
                        <LabelLarge className="pl-6">Javaソースコード内にある識別子の名前変更に関する研究</LabelLarge>
                        <HeadingXSmall className="pt-3">発表実績</HeadingXSmall>
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
                        
                    </div>} 
                    />
            </div>
        </div>
    );
}


const languageRank = [
    {
        name: "Java",
        rank: 5
    },
    {
        name: "Python",
        rank: 4
    },

    {
        name: "JavaScript",
        rank: 3
    },
    {
        name: "TypeScript",
        rank: 3
    },
    {
        name: "Go",
        rank: 3
    },
    {
        name: "C",
        rank: 2.5
    },
    {
        name: "C++",
        rank: 2
    },
    {
        name: "C#",
        rank: 1
    }
]

function Language() {
  return (
    <div>
      <StyledTable
        role="grid"
        $gridTemplateColumns="auto auto"
      >
        <div role="row" className="contents">
          <StyledHeadCell>言語</StyledHeadCell>
          <StyledHeadCell>得意度</StyledHeadCell>
        </div>
        {languageRank.map((item) =>
        {
            return (        
            <div role="row" className="contents">
                <StyledBodyCell>{item.name}</StyledBodyCell>
                <StyledBodyCell >
                    <StarRating numItems={5} size={20} value={item.rank} readOnly/>
                </StyledBodyCell>
            </div>);
        })}
      </StyledTable>
    </div>
  );
}