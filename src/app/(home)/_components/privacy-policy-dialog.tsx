'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-xs">개인정보 처리방침</DialogTrigger>
      <DialogContent className="max-h-[90dvh] max-w-3xl w-full overflow-y-scroll scroll text-sm">
        <>
          <div className="">
            <DialogHeader>
              <DialogTitle>개인정보 처리방침</DialogTitle>
            </DialogHeader>
            <Separator className="my-8" />
            <div className="space-y-6">
              <div className="space-y-2">
                <p>
                  <strong>주식회사 에스초이스합시다(이하 ‘회사’라고 합니다)</strong>는 정보주체의
                  자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여,
                  적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」
                  제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와
                  관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                  처리방침을 수립·공개합니다.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제1조 (개인정보 처리목적)</p>
                <p>
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의
                  목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보
                  보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <p className="strong">1. 회원 가입 및 관리</p>
                <p>
                  회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리,
                  서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부
                  확인, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
                </p>
                <p className="strong">2. 법령상 의무 이행</p>
                <p>
                  KDT 제 3자 동의서, 본인 여부 확인, 계약의 체결·유지·이행·관리·개선, 계약서 발송,
                  법령상 의무 이행, 법령 및 약관 위반 여부에 관한 조사, 약관 개정 등 공지사항의 전달
                  목적으로 개인정보를 처리합니다.
                </p>
                <p className="strong">3. 서비스 제공</p>
                <p>
                  위탁사/수탁사 제공, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공,
                  본인인증, 연령인증, 요금 결제·정산 목적으로 개인정보를 처리합니다.
                </p>
                <p className="strong">4. 마케팅 및 광고활용</p>
                <p>
                  신규 서비스 개발 및 특화, 이벤트 등 광고성 정보전달, 인구통계학적 특성에 따라
                  서비스 제공 및 광고게재, 접속 빈도파악 또는 회원의 서비스 이용 통계에 활용됩니다.
                </p>
                <p>
                  본인 여부 확인, 계약의 체결·유지·이행·관리·개선, 신청 서비스의 제공, 연구, 교육,
                  약관 개정 등 공지사항의 전달, 설문조사, 민원처리, 분쟁해결, 맞춤형 서비스 제공,
                  연구, 인구통계학적 분석, 유료서비스를 이용한 경우 결제의 승인·변경·취소 등 결제
                  업무 수행 목적으로 이용합니다.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제2조 (개인정보의 처리 및 보유 기간)</p>
                <p>
                  회사는 법령에 따른 개인정보 보유·이용기간 또는 정보 주체로부터 개인정보를 수집
                  시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리 보유합니다.
                </p>
                <p>
                  회사는 회원의 탈퇴에도 불구하고 관련 법령에서 의무 보유기간에 대해 별도로 정한
                  경우에는 해당 기간 종료 시까지 개인정보를 보유합니다.
                </p>
                <ol className="list-decimal pl-4">
                  <li className="">회원 가입 및 관리</li>
                  <ul className="list-disc pl-4">
                    <li className="">
                      보유기간 : 회원 탈퇴 시까지 (단. 다음 사유에 해당되는 경우 해당 사유 종료
                      시까지)
                    </li>
                    <li className="">
                      관계 법령 위반에 따른 수사/조사 등이 진행 중인 경우에는 해당 수사/조사 종료
                      시까지
                    </li>
                    <li className="">서비스 이용에 따른 채권/채무관계 정산 시까지</li>
                  </ul>
                  <li className="">
                    재화/서비스 제공 : 재화/서비스 공급 완료 및 요금결제 / 정산완료 시까지
                    <br />
                    (단. 다음 사유에 해당되는 경우 해당 사유 종료 시까지)
                  </li>
                  <ul className="list-disc pl-4">
                    <li className="">계약 또는 청약철회 등에 관한 기록 : 5년</li>
                    <li className="">표시 광고에 관한 기록 : 광고 게재 종료 후 6개월</li>
                    <li className="">대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                    <li className="">소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                    <li className="">전자금융거래의 관한 기록 : 5년</li>
                  </ul>
                  <li className="">회사 내부방침</li>
                  <ul className="list-disc pl-4">
                    <li className="">부정이용 등에 관한 기록 : 10년</li>
                  </ul>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제3조 (처리하는 개인정보 항목)</p>
                <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                <table className="table-auto divide-y">
                  <thead>
                    <tr>
                      <th className="border">
                        <p>수집시기</p>
                      </th>
                      <th className="border">
                        <p>필수 수집항목</p>
                      </th>
                      <th className="border">
                        <p>선택 수집항목</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr className="">
                      <td className="border p-2">
                        <p>회원가입</p>
                      </td>
                      <td className="border p-2">
                        <p>이름, 휴대폰 번호, 이메일 주소, UserID, 개인고유식별번호</p>
                      </td>
                      <td className="border p-2">
                        <p>생년월일, 나이</p>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border p-2">
                        <p>수강생 교육 서비스 제공</p>
                      </td>
                      <td className="border p-2">
                        <p>이름, 휴대폰 번호, 성별, 주소, 학력, 계좌번호, 근태정보, 경력, 연봉</p>
                      </td>
                      <td className="border p-2">
                        <p></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제4조 (개인정보의 제3자 제공)</p>
                <p>
                  회사는 정보주체의 동의가 있거나 법률에서 정한 요건과 절차를 갖춘 경우에 한하여
                  개인정보를 제3자에게 제공합니다.
                </p>
                <table className="table-auto hlImrX">
                  <thead>
                    <tr>
                      <th className="border">
                        <p>제공받는 자</p>
                      </th>
                      <th className="border">
                        <p>이용 목적</p>
                      </th>
                      <th className="border">
                        <p>제공 항목</p>
                      </th>
                      <th className="border">
                        <p>보유 및 이용기간</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        <p>
                          취업연계 서비스 파트너 기업 (예 : IT기업, 게임사, AI기업 등)
                          <br />
                          <a
                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRiyw8qwxffRhRRcHqwlv9D1pzt4vxbcFPA0bGgr0ODiKUpDq7TjYYRy-983tN21DBMf7Plj0Uqo4qO/pubhtml?gid=0&amp;single=true"
                            target="_blank"
                          >
                            <strong>[모두 보기]</strong>
                          </a>
                        </p>
                      </td>
                      <td className="border p-2">
                        <p>취업연계 서비스 제공</p>
                      </td>
                      <td className="border p-2">
                        <p>이름, 휴대폰 번호, 성별, 군복무 정보, 학력, 경력, 근태정보</p>
                      </td>
                      <td className="border p-2">
                        <p>
                          제공목적 달성시까지
                          <br />
                          <br />
                          단, 전자상거래 등에서의 소비자 보호에 관한 법률 및 관계 법령에 따른 보관
                          의무가 있을 경우 해당 기간 동안 보관함
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <p>
                          기업연계 후불제 교육 서비스 기업 (예 : IT기업, 게임사, AI기업 등)
                          <br />
                          <a
                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRiyw8qwxffRhRRcHqwlv9D1pzt4vxbcFPA0bGgr0ODiKUpDq7TjYYRy-983tN21DBMf7Plj0Uqo4qO/pubhtml?gid=1991761264&amp;single=true"
                            target="_blank"
                          >
                            <strong>[모두 보기]</strong>
                          </a>
                        </p>
                      </td>
                      <td className="border p-2">
                        <p>교육비 후불제 플랫폼 서비스 제공</p>
                      </td>
                      <td className="border p-2">
                        <p>이름, 휴대폰 번호, 성별, 군복무 정보, 학력, 경력, 근태정보</p>
                      </td>
                      <td className="border p-2">
                        <p>
                          제공목적 달성시까지
                          <br />
                          <br />
                          단, 전자상거래 등에서의 소비자 보호에 관한 법률 및 관계 법령에 따른 보관
                          의무가 있을 경우 해당 기간 동안 보관함
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제5조 (개인정보처리의 위탁)</p>
                <p>
                  1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를
                  위탁하고 있습니다.
                </p>
                <p>
                  2. 회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외
                  개인정보 처리금지, 기술적/관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리/감동,
                  손해배상과 같은 책임에 관한 사항을 계약서 및 문서에 명시하고, 수탁자가 개인정보를
                  안전하게 처리하는지를 감독하고 있습니다.
                </p>
                <p>
                  3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을
                  통하여 공개하도록 하겠습니다.
                </p>
                <table className="table-auto fjbwWc">
                  <thead>
                    <tr>
                      <th className="border">
                        <p>구분</p>
                      </th>
                      <th className="border">
                        <p>수탁 업체</p>
                      </th>
                      <th className="border">
                        <p>위탁업무 내용</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        <p>서버 제공</p>
                      </td>
                      <td className="border p-2">
                        <p>AWS</p>
                      </td>
                      <td className="border p-2">
                        <p>서비스 제공을 및 운영을 위한 IT인프라</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제7조 (개인정보의 파기)</p>
                <p>
                  회사가 개인정보를 수집하는 경우 개인정보의 처리목적이 달성되거나 고객의 동의를
                  받은 기간까지 보유하며, 관계법령(상법, 전자금융거래법, 신용정보의 이용 및 보호에
                  관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등)에
                  의한 정보보호 사유 의무가 있는 경우에는 일정기간 동안 보유한 뒤 파기합니다.
                </p>
                <ol className="list-decimal pl-4">
                  <li className="">
                    회사가 개인정보를 수집하는 경우 그 보유기간은 원칙적으로 회원탈퇴 즉시 파기하며,
                    제3자에게 제공된 개인정보에 대해서도 지체 없이 파기하도록 조치합니다. 단. 특별한
                    이유가 있는 경우 &quot;제2조 (이용자 정보 수집 및 이용) &quot;에 명시된
                    보유기간에 따라 개인정보를 보유할 수 있습니다.
                  </li>
                  <li className="">
                    정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도
                    불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당
                    개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                  </li>
                  <li className="">개인정보 파기의 절차 및 방법은 다음과 같습니다.</li>
                  <p>
                    a. 파기절차
                    <br />
                    회사는 파기 사유가 발생한 개인정보를 선정하고,회사 개인정보보호 책임자의 승인을
                    받아 개인정보를 파기합니다.
                  </p>
                  <p>
                    b. 파기방법
                    <br />
                    회사는 전자적 파일 형태로 기록/저장된 개인정보는 기록을 재생할 수 없도록
                    파기하며, 종이 문서에 기록/저장된 개인정보는 분쇄기로 분쇄하거나 소각하여
                    파기합니다.
                  </p>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">
                  제8조 (미이용자의 개인정보 파기 등에 관한 조치)
                </p>
                <ol className="list-decimal pl-4 losTdw">
                  <li className="">
                    (주) 에스초이스합시다는 1년간 서비스를 이용하지 않은 이용자는 휴면계정으로
                    전환하고, 개인정보를 별도로 분리하여 보관합니다. 분리 보관된 개인정보는 1년간
                    보관 후 지체없이 파기합니다.
                  </li>
                  <li className="">
                    (주) 에스초이스합시다는 휴먼전환 30일 전까지 휴면예정 회원에게 별도 분리
                    보관되는 사실 및 휴면 예정일, 별도 분리 보관하는 개인정보 항목을 이메일, 문자 등
                    이용자에게 통지 가능한 방법으로 알리고 있습니다.
                  </li>
                  <li className="">
                    (주) 에스초이스합시다는 휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환
                    전 서비스 로그인을 하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을
                    하는 경우 이용자의 동의에 따라 휴면계정을 복원하여 정상적인 서비스를 이용할 수
                    있습니다.
                  </li>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제9조 (회원의 권리·의무 및 행사방법)</p>
                <ol className="list-decimal pl-4 losTdw">
                  <li className="">
                    정보주체는 (주)에스초이스합시다에 대해 언제든지 개인정보 열람/정정/삭제/처리정지
                    요구 등의 권리를 행사할 수 있습니다.
                    <br />* 만 14세 미만 아동에 관한 개인정보의 열람등 요구는 법정대리인이 직접 해야
                    하며, 만 14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여 미성년자
                    본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.
                  </li>
                  <li className="">
                    권리 행사는 (주)에스초이스합시다에 대해 개인정보 보호법 시행령 제41조 제1항에
                    따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, (주)
                    에스초이스합시다는 이에 대해 지체없이 조치하겠습니다.
                  </li>
                  <li className="">
                    권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
                    수도 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호
                    서식에 따른 위임장을 제출하셔야 합니다.
                  </li>
                  <li className="">
                    개인정보 열람 및 처리정지 요구는 개인정보 보호법 제 35조 제4항, 제37조 제2항에
                    의하여 정보주체의 권리가 제한 될 수 있습니다.
                  </li>
                  <li className="">
                    개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
                    명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                  </li>
                  <li className="">
                    (주)에스초이스합시다는 정보주체 권리에 따른 열람의 요구, 정정/삭제의 요구,
                    처리정지의 요구 시 열람 등 요구를 한 자가 본인 이거나 정당한 대리인인지를
                    확인합니다.
                  </li>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제10조 (개인정보의 안전성 확보조치)</p>
                <p>
                  (주)에스초이스합시다는 개인정보가 분실, 도난, 유출, 변조, 훼손되지 않도록 안전성
                  확보를 위해 다음과 같은 조치를 취하고 있습니다. 회사는 개인정보보호법,
                  정보통신망법 등 관련 법령에서 요구하는 관리적·기술적·물리적 보호조치의 의무를
                  준수하며, 고객의 개인정보가 안전하게 보호될 수 있도록 노력을 힘쓰고 있습니다.
                </p>
                <p>안전성 확보를 위해 아래와 같은 조치 사항을 취하고 있습니다.</p>
                <table className="table-auto emmygF">
                  <thead>
                    <tr>
                      <th className="border">
                        <p>분류</p>
                      </th>
                      <th className="border">
                        <p>조치 사항</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="px-4 py-2">
                        <p>관리적 조치</p>
                      </th>
                      <td className="border p-2">
                        <p>내부관리계획 수립•시행, 반기별 전사 보안 교육, 신규입사자 보안 교육</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>기술적 조치</p>
                      </th>
                      <td className="border p-2">
                        <p>
                          개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 보안프로그램
                          운영, 해킹 등에 대비한 대책, 고유 식별정보·민감정보·인증정보 암호화
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>물리적 조치</p>
                      </th>
                      <td className="border p-2">
                        <p>전산실, 자료보관실의 접근통제, 정보자산 반출입 통제</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">
                  제11조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)
                </p>
                <ol className="list-decimal pl-4 losTdw">
                  <li className="">
                    (주)에스초이스합시다는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용
                    정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
                  </li>
                  <li className="">
                    쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브러우저에게
                    보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장 되기도 합니다.
                  </li>
                  <p>
                    가. 쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및
                    이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보
                    제공을 위해 사용됩니다.
                  </p>
                  <p>
                    나. 쿠키의 설치/운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보
                    메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
                  </p>
                  <p>
                    다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
                  </p>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제12조 (개인정보보호 책임자)</p>
                <ol className="list-decimal pl-4 losTdw">
                  <li className="">
                    (주) 에스초이스합시다는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                    처리와 관련한 서비스 고객의 불만처리 및 피해구제 등을 위하여 아래와 같이
                    개인정보보호 책임자를 지정하고 있습니다.
                  </li>
                </ol>
                <table className="table-auto ml-4">
                  <thead className="">
                    <tr className="">
                      <th className="border px-4 py-2">
                        <p></p>
                      </th>
                      <th className="border px-4 py-2">
                        <p>개인정보 보호책임자</p>
                      </th>
                      <th>
                        <p>개인정보 관리담당자</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr>
                      <th className="px-4">
                        <p>성명</p>
                      </th>
                      <td className="border p-2">
                        <p>김케이트</p>
                      </td>
                      <td className="border p-2">
                        <p>김케이트</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>연락처</p>
                      </th>
                      <td className="border p-2">
                        <p>0507-1353-3983</p>
                      </td>
                      <td className="border p-2">
                        <p>0507-1353-3983</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>이메일</p>
                      </th>
                      <td className="border p-2">
                        <p>info@schoice.co</p>
                      </td>
                      <td className="border p-2">
                        <p>info@schoice.co</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ol start={2} className="list-decimal pl-4 losTdw">
                  <li className="">
                    회원은 회사의 서비스(또는 사업)를 이용하면서 발생한 모든 개인정보 보호 관련
                    문의, 불만, 피해구제 등에 관한 사항을 개인정보보호 책임자 및 담당부서로 문의할
                    수 있습니다. 회사는 회원의 문의에 대해 지체 없이 답변 및 처리할 것입니다.
                  </li>
                </ol>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제13조 (개인정보 열람청구)</p>
                <p>
                  정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할
                  수 있습니다.
                </p>
                <p>
                  (주) 에스초이스합시다는 정보주체의 개인정보 열람청구가 신속하게 처리되도록
                  노력하겠습니다.
                </p>
                <ul className="list-disc pl-4">
                  <li className="">
                    개인정보 열람청구 접수/처리 부서
                    <br />
                    부서명 : CX팀
                    <br />
                    담당자 : CX팀, Head
                    <br />
                    연락처 : 1670-5997,{' '}
                    <a className="colored" href="mailto:info@schoice.co">
                      info@schoice.co
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">제14조 (권익침해 구제방법)</p>
                <p>
                  회원은 개인정보 침해, 오남용 등에 대한 신고나 상담이 필요한 경우 아래의 기관에
                  문의할 수 있습니다.
                </p>
                <ul className="list-disc pl-4">
                  <li className="">
                    개인정보침해 신고센터 : (국번없이) 118 / (웹사이트:
                    <a className="colored" href="https://privacy.kisa.or.kr" target="_blank">
                      https://privacy.kisa.or.kr
                    </a>
                    )
                  </li>
                  <li className="">
                    대검찰청 사이버범죄수사단 : (국번없이) 1301 / (웹사이트:
                    <a className="colored" href="https://www.spo.go.kr" target="_blank">
                      https://www.spo.go.kr
                    </a>
                    )
                  </li>
                  <li className="">
                    경찰청 사이버수사국 : (국번없이) 182 / (웹사이트:
                    <a className="colored" href="https://ecrm.cyber.go.kr" target="_blank">
                      https://ecrm.cyber.go.kr
                    </a>
                    )
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">
                  제15조 (개인정보 취급방침의 효력발생 및 변경)
                </p>
                <p>
                  개인정보 처리방침을 변경하는 경우 회사는 홈페이지의 공지사항란 또는 이메일로 지체
                  없이 알리고, 이용자가 언제든지 변경된 사항을 쉽게 알아볼 수 있도록 조치하겠습니다.
                </p>
                <ul className="pt-8 italic">
                  <li className="">
                    <p className="strong">공지일자 : 2023년 08월 24일</p>
                  </li>
                  <li className="">
                    <p className="strong">시행일자 : 2023년 08월 24일</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
