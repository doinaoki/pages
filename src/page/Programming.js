import React from 'react';
import {HeadingXLarge, HeadingSmall, HeadingXSmall, LabelLarge, LabelMedium} from 'baseui/typography';
import {Avatar} from "baseui/avatar";
import { IoLogoGithub } from "react-icons/io";
import { StyledLink } from "baseui/link";
import { ListItem, ListItemLabel } from "baseui/list";
import {Card} from "baseui/card";
import { Check, ArrowRight } from "baseui/icon";
import {StarRating} from "baseui/rating";
import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";

const languageRank = [
    {
        name: "Java",
        rank: 3
    },
    {
        name: "C",
        rank: 3
    },
    {
        name: "JavaScript",
        rank: 3
    },
    {
        name: "Python",
        rank: 3
    },
    {
        name: "TypeScript",
        rank: 3
    },
    {
        name: "C++",
        rank: 3
    },
    {
        name: "Go",
        rank: 3
    },
    {
        name: "C#",
        rank: 1
    }
]

function InfoArea({title, children}){ 
    return(
        <div className="pt-8">
            <div className="flex items-center">
                <Check size={35} color={'#fff'} className="mt-1"/>
                <HeadingSmall>{title} </HeadingSmall>
            </div>
            <div className="pl-2 pt-2">
                <LabelLarge>
                    {children}
                </LabelLarge>
            </div>
        </div>
    );
}

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

function Development({number, title, children}){
    return(
        <div>
            <HeadingSmall>{number}. {title}</HeadingSmall>
            <div className="pl-4 pt-2"><LabelMedium><div className="leading-6">{children}</div></LabelMedium></div>
            <hr className="border-gray-500 my-8 w-full" />
        </div>
    );
}

export default function Programming(){
    return (
        <div>
            <LabelLarge>
                Programming
            </LabelLarge>
            <InfoArea title="得意な言語順">
                <Language/>
            </InfoArea>
            <InfoArea title="制作物">
                <div className="pl-7">
                    <Development number={1} title="RENAS">
                        研究で作成 <br />
                        開発者の名前変更をサポートするためのツール
                        <StyledLink href="/programming"><LabelMedium><ArrowRight size={20}/>詳細はstudyへ</LabelMedium></StyledLink>
                    </Development>
                    <Development number={2} title="share calendar">
                        友人の日程が開いている日を教えてくれるwebアプリケーション <br />
                        開発時期: 2024年 <br/>
                        使用言語: Go, TypeScript(React), sql
                    </Development>
                    <Development number={3} title="清一色学習アプリ">
                        清一色の待ちを学習するためのアプリ <br/>
                        麻雀牌は13,10,7枚、難易度調整が可能、間違えた問題は後から復習することができる。<br/>
                        最初Pythonで作成したリンク(パソコンで実行)<br/>
                        開発時期: 2023年5月 ~ 7月
                    </Development>
                    <Development number={4} title="輪講データベース">
                        ゼミで行われた資料を管理するためのwebアプリ <br />
                        チームを作り(3人)、ゼミの課題で作成。<br />
                        nuxt3を使用 <br />
                        バックエンドを担当 <br />
                        開発時期: 2023年5月 ~ 7月 <br />
                        公開することができないので写真のみ張り付けてあります
                    </Development>
                    <Development number={5} title="TODOリスト">
                        taskの閲覧、作成ができるもの。 <br />
                        バックエンドを担当した。<br />
                        開発時期: 2023年12月 ~ 2月 <br />
                    </Development>
                    <Development number={6} title="TypingWar ONMYOJI">
                        タイピングレースゲーム<br />
                        タイピングを正確に打つたびにキャラクターが速く動き、一番早くゴールにたどり着いた人が勝ち<br />
                        google driveに置きました <a href="https://drive.google.com/drive/folders/1JlobHbSryzWa_ec7khj8eTWHf5l8xY71">リンク</a><br />
                        バックエンドを担当<br />
                        開発時期: 2020年11月の5日間<br />
                    </Development>
                    <Development number={7} title="Tokyo567">
                        初めての制作物。<br />
                        簡易的な2Dアクションゲーム。<br />
                        スキルを駆使してボスを倒したらゲームクリア。<br />
                        google driveに置きました<a href="https://drive.google.com/drive/folders/1UMX5vUEc6sDob393lPsuk2QGnfKAwKpz">リンク</a><br />
                        バックエンドを担当<br />
                        開発時期: 2020年5月の5日間<br />
                    </Development>
                </div>
            </InfoArea>
        </div>
    );
}