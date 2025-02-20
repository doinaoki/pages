import React from 'react';
import {HeadingXLarge, HeadingSmall, HeadingXSmall, LabelLarge, LabelMedium} from 'baseui/typography';
import {Avatar} from "baseui/avatar";
import { IoLogoGithub } from "react-icons/io";
import database from '../components/database.mp4';
import mahjong from '../components/mahjong.mp4';
import TypingGame from '../components/TypingGame.mp4';
import Tokyo from '../components/Tokyo.mp4';
import share_calendar from '../components/share_calendar.png';
import { StyledLink } from "baseui/link";
import { ListItem, ListItemLabel } from "baseui/list";
import {Card} from "baseui/card";
import { Check, ArrowRight } from "baseui/icon";
import {StarRating} from "baseui/rating";
import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";

const languageRank = [
    {
        name: "Java",
        rank: 5,
        explain: "研究で使用。CLIアプリやIntelliJのプラグイン作成。discordのbotやwebアプリ作成時に使用経験あり"
    },
    {
        name: "Python",
        rank: 4,
        explain: "研究で使用。AIの講義や競技プログラミングで使用"
    },
    {
        name: "JavaScript",
        rank: 3,
        explain: "Webアプリのフロントエンド（React）で使用。また、インターンでアンケート画面を作成するために使用"
    },
    {
        name: "TypeScript",
        rank: 3,
        explain: "Webアプリのフロントエンド（React）で使用。また、インターンでアンケート画面を作成するために使用"
    },
    {
        name: "Go",
        rank: 3,
        explain: "Webアプリのバックエンドで使用。また、インターン(1day)でゲームのバックエンド処理をするために使用"
    },
    {
        name: "C",
        rank: 2.5,
        explain: "講義で使用。講義ではCコンパイラの作成や並列処理、簡易的なOSをいじるために使用"
    },
    {
        name: "C++",
        rank: 2,
        explain: "ゲーム会社のインターンで使用。インターン(2day + 2weekの自習)では図形の衝突判定を実装を行った"
    },
    {
        name: "C#",
        rank: 1,
        explain: "Unityで使用"
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
        $gridTemplateColumns="auto auto auto"
      >
        <div role="row" className="contents">
          <StyledHeadCell>言語</StyledHeadCell>
          <StyledHeadCell>得意度</StyledHeadCell>
          <StyledHeadCell>経験</StyledHeadCell>
        </div>
        {languageRank.map((item) =>
        {
            return (        
            <div role="row" className="contents">
                <StyledBodyCell>{item.name}</StyledBodyCell>
                <StyledBodyCell >
                    <StarRating numItems={5} size={20} value={item.rank} readOnly/>
                </StyledBodyCell>
                <StyledBodyCell >{item.explain}</StyledBodyCell>
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
            <HeadingXLarge>
                Programming
            </HeadingXLarge>
            <InfoArea title="得意な言語順">
                <Language/>
            </InfoArea>
            <InfoArea title="制作物">
                <div className="pl-7">
                    <Development number={1} title="RENAS">
                        研究で作成 <br />
                        開発者の名前変更をサポートするためのツール
                        <StyledLink href="/pages/#/study"><LabelMedium><ArrowRight size={20}/>詳細はstudyへ</LabelMedium></StyledLink>
                    </Development>
                    <Development number={2} title="share calendar">
                        友人の日程が開いている日を教えてくれるwebアプリケーション <br />
                        開発時期: 2024年~ <br/>
                        使用言語: Go, TypeScript(React), sql <br/>
                        以下はホーム画面。設定したグループごとに開いている日を表示してくれる。
                        <img src={share_calendar} width={300}></img>
                    </Development>
                    <Development number={3} title="清一色学習アプリ">
                        清一色の待ちを学習するためのアプリ <br/>
                        麻雀牌は13,10,7枚、難易度調整が可能、間違えた問題は後から復習することができる。<br/>
                        最初Pythonで作成したリンク(パソコンで実行)<br/>
                        開発時期: 2023年5月 ~ 7月
                        <video width="600" controls muted>
                            <source src={mahjong} type="video/mp4" />
                            お使いのブラウザは動画タグをサポートしていません。
                        </video>
                    </Development>
                    <Development number={4} title="輪講データベース">
                        ゼミで行われた資料を管理するためのwebアプリ <br />
                        チーム(3人)を作り作成。<br />
                        nuxt3を使用 <br />
                        バックエンドを担当 <br />
                        開発時期: 2023年5月 ~ 7月 <br />
                        <video width="600" controls muted>
                            <source src={database} type="video/mp4" />
                            お使いのブラウザは動画タグをサポートしていません。
                        </video>
                    </Development>
                    <Development number={5} title="TODOリスト">
                        taskの閲覧、作成ができるもの。 <br />
                        Go, React, sql, tailwindCSSを使用 <br />
                        バックエンド(Go, sql)を担当した。<br />
                        開発時期: 2023年12月 ~ 2月 <br />
                    </Development>
                    <Development number={6} title="TypingWar ONMYOJI">
                        タイピングレースゲーム<br />
                        タイピングを正確に打つたびにキャラクターが速く動き、一番早くゴールにたどり着いた人が勝ち<br />
                        google driveに置きました <StyledLink href="https://drive.google.com/drive/folders/1JlobHbSryzWa_ec7khj8eTWHf5l8xY71">リンク</StyledLink><br />
                        バックエンドを担当<br />
                        開発時期: 2020年11月の5日間<br />
                        <video width="600" controls muted>
                            <source src={TypingGame} type="video/mp4" />
                            お使いのブラウザは動画タグをサポートしていません。
                        </video>
                    </Development>
                    <Development number={7} title="Tokyo567">
                        初めての制作物。<br />
                        簡易的な2Dアクションゲーム。<br />
                        スキルを駆使してボスを倒したらゲームクリア。<br />
                        google driveに置きました <StyledLink href="https://drive.google.com/drive/folders/1UMX5vUEc6sDob393lPsuk2QGnfKAwKpz">リンク</StyledLink><br />
                        バックエンドを担当<br />
                        開発時期: 2020年5月の5日間<br />
                        <video width="600" controls>
                            <source src={Tokyo} type="video/mp4" />
                            お使いのブラウザは動画タグをサポートしていません。
                        </video>
                    </Development>
                </div>
            </InfoArea>
        </div>
    );
}