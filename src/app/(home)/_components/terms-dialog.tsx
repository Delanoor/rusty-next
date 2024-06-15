'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

const TermsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-xs">사용자 이용 약관</DialogTrigger>
      <DialogContent className="max-h-[90dvh] max-w-3xl w-full overflow-y-scroll scroll text-sm">
        <DialogHeader>
          <DialogTitle>사용자 이용 약관</DialogTitle>
        </DialogHeader>
        <Separator className="my-8" />
        <div className="list-decimal">
          <div className="space-y-6">
            <p>
              <strong>(주)에스초이스합시다 기본이용약관</strong>
            </p>
            <ol>
              <li>
                <strong className="text-base font-bold">목적</strong>
              </li>
            </ol>
            <p>
              이 이용약관은 (주)에스초이스합시다(이하 “회사”)이 운영하는 서비스(이하 “서비스”)를
              이용함에 있어 회사와 회원 간의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을
              목적으로 합니다.
            </p>
            <ol className="space-y-2 list-decimal list-inside">
              <li className="space-y-2">
                <strong className="text-base font-bold">용어의 정의</strong>
                <ol className="list-inside space-y-2">
                  <li>
                    이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li className="list-inside text-justify">
                        “서비스”는 회사가 제공하는 프로그래밍 교육 플랫폼 등 회사가 이용자에게
                        전자적으로 제공하는 용역 및 온라인/오프라인 서비스를 의미하며, 본 이용약관이
                        적용되는 서비스의 구체적인 내용은 아래와 같습니다.
                        <ol className="space-y-2 mt-2">
                          <li>
                            합시다 lms (
                            <a href="https://lms.habsida.com/">https://lms.habsida.com/</a>)
                          </li>
                          <li>
                            합시다 edu (
                            <a href="https://edu.habsida.com/">https://edu.habsida.com/</a>)
                          </li>
                          <li>기타 회사가 제공하는 서비스</li>
                        </ol>
                      </li>
                      <li>
                        “이용자”는 회사의 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를
                        이용하는 회원 및 비회원을 말합니다.
                      </li>
                      <li>
                        “회원”은 이 약관에 따라 회사와 이용 계약을 체결하고 회사로부터 서비스 이용
                        자격을 부여받은 사람을 말합니다.
                      </li>
                      <li>
                        “비회원”은 회원이 아닌 상태에서 회사가 제공하는 서비스를 이용하는 사람을
                        말합니다.
                      </li>
                      <li>
                        “아이디(ID)”는 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가
                        승인한 문자 또는 숫자의 조합을 의미합니다.
                      </li>
                      <li>
                        “비밀번호”는 서비스에서 회원의 비밀보호를 위하여 회원이 설정한 문자, 숫자,
                        기호의 조합을 의미합니다.
                      </li>
                      <li>“유료 서비스”는 서비스 중 회사가 유료로 제공하는 서비스를 의미합니다.</li>
                    </ol>
                  </li>
                  <li>
                    이 약관에서 사용하는 용어 중 제1항에서 정하지 아니한 것은 서비스 안내 및 관련
                    법령 또는 상관례에서 정하는 바에 따릅니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">약관의 게시와 개정</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스의 초기화면 또는 링크로
                    연결된 화면에 게시합니다.
                  </li>
                  <li>
                    회사가 이 약관을 개정할 경우에는 약관의 적용일자 및 개정내용, 개정 사유 등을
                    명시하여 현행 약관과 함께 서비스 초기화면에 그 적용일자 7일 전부터 적용일자
                    전일까지 공지합니다. 다만, 회원에게 불리하거나 중대한 사항을 변경하는 경우에는
                    그 적용일자 30일 전부터 적용일자 전일까지 공지하고, 회원의 전자우편 또는 로그인
                    시 동의창 등의 전자적 수단을 통해 별도로 통지합니다.
                  </li>
                  <li>
                    회사가 전항에 따라 개정약관을 공지 또는 통지하면서 회원에게 적용일자 전까지
                    의사표시를 하지 않으면 약관의 개정에 동의한 것으로 본다는 뜻을 명확하게 공지
                    또는 통지하였음에도 회원이 명시적으로 거부의사를 표명하지 아니한 경우 회원은
                    개정약관에 동의한 것으로 봅니다.
                  </li>
                  <li>
                    회원이 개정약관의 적용에 동의하지 않으면 회사는 해당 회원에 대해 개정 약관의
                    내용을 적용할 수 없으며, 이 경우 회사 또는 회원은 이용계약을 해지할 수 있습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">약관 외 준칙</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 개별 서비스 별로 별도의 이용약관 및 정책(이하 “개별 약관 등”)을 둘 수
                    있으며, 해당 내용이 이 약관과 상충할 경우에는 개별 약관 등이 우선하여
                    적용됩니다. 단, 개별 약관 등에서 이 약관의 내용이 개별 약관의 내용에 우선한다고
                    규정하는 경우에는 이 약관의 내용이 개별 약관 등에 우선하여 적용됩니다.
                  </li>
                  <li>
                    이 약관에 명시되지 않은 사항은 개별 약관 등 또는 전자상거래 등에서의
                    소비자보호에 관한 법률 등 관련법령의 규정 또는 상관례에 의합니다.
                  </li>
                  <li>
                    이 약관과 관련하여 회사의 정책 변경, 법령의 제/개정 또는 정부기관의 고시나 지침
                    등에 의하여 회사가 서비스의 공지사항 게시판 등을 통해 공지하는 내용도 이용계약의
                    일부를 구성합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회원 가입 및 서비스 이용계약의 체결</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    이용자가 이 약관에 동의하고 회사가 요구하는 필수정보를 입력함으로써 회원가입을
                    신청하고, 회사가 이용자의 회원 가입 신청을 승낙하는 경우 해당 이용자는 회원으로
                    가입되며, 회원가입 시점에 회원과 회사는 서비스 이용계약을 체결한 것으로
                    간주됩니다.
                  </li>
                  <li>
                    회사는 제1항의 회원 가입 절차에서 회원이 제공한 정보가 사실과 일치하는지 여부를
                    확인하기 위하여 법령에 의하여 허용된 범위에서 전문기관을 통해 실명확인 또는
                    본인인증을 요청할 수 있습니다.
                  </li>
                  <li>
                    회사는 다음 각 호의 어느 하나에 해당하는 경우, 제1항의 신청에 대하여 승낙을 하지
                    않을 수 있습니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>이용자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                      <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                      <li>허위의 정보를 기재하거나, 회사가 요구하는 정보를 기재하지 않은 경우</li>
                      <li>
                        이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을
                        위반하며 신청하는 경우
                      </li>
                      <li>천재지변으로 인한 설비의 장애 상태가 발생한 경우</li>
                      <li>
                        회원 가입 신청을 허용함에 따라 회사의 전체 서비스 품질 유지에 곤란하다고
                        판단되는 경우
                      </li>
                      <li>
                        회원에게 서비스를 제공하기 위한 설비의 여유가 없거나 기술상 서비스 제공이
                        곤란한 경우
                      </li>
                      <li>회사의 운영상, 사업상 위해 요소 또는 위해 우려가 있는 경우</li>
                      <li>기타 회사의 사정으로 이용 승낙이 곤란한 경우</li>
                    </ol>
                  </li>
                  <li>회원가입의 시기는 “회사”의 승낙이 “이용자”에게 도달한 시점으로 합니다.</li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">미성년자의 회원 가입에 관한 특칙</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    만 14세 미만의 이용자는 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고
                    부모 등 법정대리인의 동의를 얻은 후에 회원가입을 신청하고 본인의 개인정보를
                    제공하여야 합니다. 단, 그 경우에도 서비스의 종류에 따라 회사는 만 14세 미만
                    이용자의 회원가입 신청을 거부하거나 이용자의 서비스 이용을 제한할 수 있습니다.
                  </li>
                  <li>
                    회사는 부모 등 법정대리인의 동의에 대한 확인절차를 거치지 않은 14세 미만
                    이용자에 대하여는 가입을 취소 또는 불허할 수 있습니다.
                  </li>
                  <li>
                    만 14세 미만 이용자의 부모 등 법정대리인은 아동에 대한 개인정보의 열람, 정정,
                    갱신을 요청하거나 회원가입에 대한 동의를 철회할 수 있으며, 이러한 경우에 회사는
                    지체 없이 필요한 조치를 취해야 합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회사의 의무</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 관련 법령과 이 약관이 정하는 권리의 행사와 의무의 이행을 신의에 좇아
                    성실하게 하여야 합니다.
                  </li>
                  <li>
                    회사는 이용자가 이용한 서비스 및 그 대금 내역을 수시로 확인할 수 있도록
                    조치합니다.
                  </li>
                  <li>
                    회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만이 정당하다고
                    인정할 경우에는 이를 지체없이 처리합니다. 이용자가 제기한 의견이나 불만사항에
                    대해서는 게시판을 활용하거나 전자우편 등을 통하여 그 처리과정 및 결과를
                    전달합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회원의 의무</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회원은 이 약관에 의하여 회사에 정보를 제공하여야 하는 경우에는 진실되고 적법한
                    정보를 제공하여야 하며, 허위 또는 불법 정보 제공으로 인해 발생한 불이익에
                    대해서는 보호받지 못합니다.
                  </li>
                  <li>
                    회원은 이 약관 및 회사가 서비스에서 고지하는 내용을 준수하여야 하며, 이 약관 및
                    고지내용을 위반하거나 이행하지 아니하여 발생하는 모든 손실, 손해에 대하여 책임을
                    부담합니다.
                  </li>
                  <li>
                    회원이 본인의 계정 정보를 소홀히 관리하거나, 제3자에게 이용을 승낙함으로써
                    발생하는 손해에 대하여는 회원에게 책임이 있습니다.
                  </li>
                  <li>
                    회원은 다음 행위를 행하는 경우 회사는 제15조에 따라 서비스 이용을 제한할 수
                    있으며, 이 경우 발생하는 모든 책임은 회원이 부담합니다. 회사는 필요한 경우
                    회원의 금지행위 사실을 관련 정부기관 또는 사법기관에 통지할 수 있습니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>회원이 허위의 정보를 기재하거나 입력하는 행위</li>
                      <li>타인의 정보를 도용하는 행위</li>
                      <li>아이디와 비밀번호를 타인이 사용하도록 하거나 공유하는 행위</li>
                      <li>회사가 게시한 정보를 임의로 변경하는 행위</li>
                      <li>회사가 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시하는 행위</li>
                      <li>회사 또는 제3자의 저작권 등 지적재산권에 대한 침해행위</li>
                      <li>
                        서비스 이용 중 영상, 사진 등의 정보를 녹화, 녹음하거나 이를 가능하게 하는
                        소프트웨어를 실행하는 행위
                      </li>
                      <li>
                        회사의 사전 동의 없이 서비스에서 얻은 정보를 정당한 이용 외의 목적으로
                        사용하는 행위
                      </li>
                      <li>회사가 제공하는 서비스를 영리적인 목적으로 이용하는 행위</li>
                      <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>
                        외설 또는 폭력적인 말이나 글, 화상, 음향, 기타 공서양속에 반하는 정보를
                        회사의 사이트에 공개 또는 게시하는 행위
                      </li>
                      <li>
                        부정이용행위
                        <ol className="list-decimal p-4 list-inside space-y-2">
                          <li>
                            동일한 아이디로 2대 이상의 PC 혹은 모바일 기기 등에서 동시 접속이
                            발생하는 경우
                          </li>
                          <li>동일한 아이디로 다수의 PC 혹은 IP에서 서비스 이용이 발생하는 경우</li>
                          <li>
                            이용자가 본인의 아이디를 통한 서비스 제공을 제3자가 받도록 하는 경우
                          </li>
                          <li>
                            이용자가 본인의 아이디 또는 아이디를 통한 서비스 제공을 제3자에게 판매,
                            대여, 양도하거나 이를 광고하는 경우
                          </li>
                        </ol>
                      </li>
                      <li>기타 불법적이거나 부당한 행위</li>
                    </ol>
                  </li>
                  <li>
                    회원이 본 조의 의무를 위반하는 경우, 회사는 회원에게 손해의 배상을 청구하거나
                    기지급받은 이용대금의 환불을 거부할 수 있습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">유료 서비스</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    유료 서비스는 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일
                    24시간 운영을 원칙으로 합니다. 단, 제13조의 경우에는 유료 서비스의 제공이
                    일시적으로 중단될 수 있습니다.
                  </li>
                  <li>
                    유료 서비스의 구조, 인터페이스, 디자인, 경험 등은 회사의 정책에 따라 상시적으로
                    변경될 수 있으며, 유료 서비스를 지불한 회원의 사용목적을 침해하지 않은 이상
                    회사는 위 변경에 대해 별도의 보상, 환불 등을 하지 않습니다.
                  </li>
                  <li>
                    회사의 사업종목 전환, 사업의 포기, 업체 간의 통합 등의 이유로 유료 서비스를
                    제공할 수 없게 되는 경우에는 회사는 이용자에게 이를 통지하고 회사가 제시한
                    조건에 따라 이용자에게 보상합니다.
                  </li>
                  <li>
                    회사는 상당한 이유가 있는 경우에 운영상 또는 기술상의 필요에 따라 제공 중인 유료
                    서비스의 내용을 변경할 수 있습니다. 이용자가 변경된 유료 서비스의 내용에
                    동의하지 않는 경우, 회사는 동의를 거절한 이용자에게 변경 전 서비스를 제공할 수
                    있고, 변경 전 서비스 제공이 불가능할 경우 유료 서비스 제공을 중단하고 중단
                    시점을 기준으로 일할계산한 이용대금을 반환할 수 있습니다.
                  </li>
                  <li>
                    회원이 별도로 비용을 지불하지 않은 서비스는 회사에 의해 언제든지 중단될 수
                    있습니다.
                  </li>
                  <li>
                    회사는 서비스를 제공하는 과정에서 서비스 이용 중 광고성 정보를 서비스 화면,
                    홈페이지, 전자우편 등의 방법으로 회원에게 제공할 수 있습니다. 다만, 회원은
                    언제든지 광고성 정보가 포함된 전자우편의 수신을 거절할 수 있습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">유료 서비스 거래 규정</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    유료 서비스의 이용 요금은 서비스 내 화면에 알기 쉽게 표기하며, 결제 방식은 다음
                    각 호에 명시된 결제수단 중 회사가 제공하는 수단을 이용하여 진행할 수 있습니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>제휴된 간편결제수단</li>
                      <li>제휴된 신용카드</li>
                      <li>전화 또는 휴대전화를 이용한 결제</li>
                      <li>폰뱅킹, 인터넷뱅킹, 온라인 무통장 입금 등의 각종 계좌이체</li>
                      <li>그 밖에 회사가 정한 결제수단</li>
                    </ol>
                  </li>
                  <li>
                    회원이 유료 서비스에 대한 결제를 완료한 때 유료 서비스 이용 계약이 성립된 것으로
                    봅니다.
                  </li>
                  <li>
                    회사는 이용자가 등록한 결제수단을 통하여 월 단위로 이용요금이 자동으로 결제되고
                    이용기간이 자동으로 갱신되는 서비스를 제공할 수 있습니다. 단, 이 경우 회사는
                    이용자에게 이용요금이 자동으로 결제된다는 사실을 사전에 통지하여야 합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">청약 철회</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회원은 디지털 콘텐츠를 공급받은 날로부터 7일 이내에 청약 철회를 할 수 있습니다.
                    다만, 디지털 콘텐츠의 내용이 회사가 표시·광고한 내용과 다르거나 계약내용과
                    다르게 이행된 경우에는 그 디지털 콘텐츠를 공급받은 날부터 1개월 이내, 그 사실을
                    안 날 또는 알 수 있었던 날부터 14일 이내에 청약철회가 가능합니다.
                  </li>
                  <li>
                    회원이 본 조에 의하여 청약을 철회하는 경우, 회사는 결제시의 지급수단과 동일한
                    지급수단으로 대금을 환불합니다.
                  </li>
                  <li>
                    다음 각호의 경우에는 회원의 청약철회가 제한됩니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>
                        회원의 사용 또는 오랜 시간이 지나 디지털 콘텐츠의 가치가 현저히 감소한 경우
                      </li>
                      <li>복제가 가능한 디지털 콘텐츠의 내용을 열람한 경우</li>
                    </ol>
                  </li>
                  <li>
                    이용자는 제1항 내지 제3항의 규정에도 불구하고 유료 서비스의 내용이 표시·광고
                    내용과 다르거나 현저한 차이가 있는 경우 또는 회사의 귀책사유로 인하여 유료
                    서비스의 정상적인 이용이 현저히 불가능한 경우에는 구매일 또는 유료 서비스 이용
                    가능일로부터 3개월 이내 또는 그 사실을 안 날 또는 알 수 있었던 날부터 30일
                    이내의 기간 중 빠른 기간에 청약철회를 할 수 있습니다.
                  </li>
                  <li>
                    본 조에 의한 청약의 철회는 회원이 서비스 내에 마련되어 있는 방법을 통하여 회사에
                    철회 의사를 표시한 때에 그 효력이 발생합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">서비스 중단</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 통신, 전력 등의 공급이 중단되는 불가피한 경우는 물론 정보통신설비의
                    보수점검, 증설, 교체, 이전 등의 유지 관리 업무를 수행하기 위해 필요한 경우
                    서비스의 제공을 일시적으로 중단할 수 있으며, 이 경우 사전에 서비스의 중단을
                    공지합니다. 다만, 불가피하게 사전 공지를 할 수 없는 경우 회사는 사후 공지할 수
                    있습니다.
                  </li>
                  <li>
                    회사는 천재지변, 전쟁, 폭동, 테러, 해킹, DDOS 등 불가항력적 사유로 서비스가
                    중단된 경우 즉시 이러한 사실을 공지하되, 만일 정보통신설비의 작동불능 등의
                    불가피한 사유로 인해 사전 공지가 불가능한 경우에는 이러한 사정이 해소된 이후
                    즉시 이러한 사실을 공지합니다.
                  </li>
                  <li>
                    회사는 본 조 제1항 내지 제2항의 사유가 발생한 경우 최대한 빠른 시간 내에
                    서비스를 재개하도록 최선의 노력을 다합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">서비스의 변경 또는 종료 등</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 운영상, 경영상, 기술상의 필요에 따라 서비스의 전부 또는 일부 내용을
                    변경하거나 서비스를 종료할 수 있으며, 서비스의 내용, 이용방법 등에 대하여 변경이
                    있는 경우에는 변경사유, 변경내용 및 제공일자 등을 변경 7일 전에, 서비스를
                    종료하는 경우에는 30일 전에 서비스 초기화면에 해당 사실을 공지합니다. 다만,
                    사전에 공지할 수 없는 부득이한 사정이 있는 경우에는 사후에 지체 없이 이를 공지할
                    수 있습니다.
                  </li>
                  <li>
                    회사는 이 약관 및 관련법령에 특별한 규정이 없는 한 서비스의 변경, 내용 수정 또는
                    종료로 인하여 회원이 입은 손해에 대해 아무런 책임을 지지 않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회원의 탈퇴 등</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회원은 언제든지 회원에서 탈퇴함으로써 서비스 이용계약 해지 신청을 할 수 있으며,
                    회사는 관련법령 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.
                  </li>
                  <li>
                    회원이 이용계약을 해지할 경우, 회사는 관련 법령 및 개인정보처리방침에 따라 회원
                    정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터를 삭제합니다.
                  </li>
                  <li>
                    이용계약 해지로 인해 발생한 불이익에 대한 책임은 회원 본인이 부담하여야 하며,
                    이용계약이 종료되면 회사는 회원에게 부가적으로 제공한 각종 혜택(현금성 포인트
                    등을 포함)은 즉시 효력이 상실됩니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">서비스 이용제한 등</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 회원에게 다음 각 호의 어느 하나에 해당하는 사유가 발생하거나 확인된 경우
                    서비스 이용을 제한하거나 이용계약을 해지할 수 있습니다. 본 조의 이용계약 해지는
                    회원의 자격을 탈퇴하는 것을 의미합니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>회원이 서비스의 원활한 진행을 방해하는 행위를 하거나 시도한 경우</li>
                      <li>회원이 고의 또는 중대한 과실로 회사의 영업을 방해한 경우</li>
                      <li>
                        다른 회원의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 법령 또는 선량한
                        풍속 기타 사회질서에 위배되는 행위를 한 경우
                      </li>
                      <li>회원이 이 약관 또는 관련 법령을 위반하는 행위를 한 경우</li>
                      <li>회원에게 제5조에서 정한 회원 가입의 거부 사유가 있음이 확인된 경우</li>
                      <li>
                        기타 회사가 합리적인 판단에 기하여 서비스의 제공을 거부할 필요가 있다고
                        인정할 경우
                      </li>
                    </ol>
                  </li>
                  <li>
                    회사가 서비스 이용을 제한하였음에도 불구하고, 동일한 행위가 2회 이상 반복되거나
                    30일 이내에 그 사유가 시정되지 아니하는 경우, 회사는 서비스 이용계약을 해지하고
                    해당 이용자를 회원의 지위에서 탈퇴 처리할 수 있습니다.{' '}
                  </li>
                  <li>
                    회원은 본 조에 따른 이용제한 또는 이용계약의 해지에 대해 회사가 정한 절차에 따라
                    이의신청을 할 수 있습니다. 이 때, 이의가 정당하다고 회사가 인정하는 경우 회사는
                    즉시 서비스의 이용을 재개합니다.
                  </li>
                  <li>
                    회사의 서비스 이용제한 또는 이용계약의 해지에 정당한 사유가 있는 경우에 회사는
                    서비스 이용제한 또는 이용계약의 해지로 인하여 회원이 입은 손해를 배상하지
                    않습니다. 단, 회사가 이용자에 대하여 이용 대금의 환급이 필요하다고 인정되는
                    경우에 한하여, 지급받은 대금 중 전부 또는 일부를 반환할 수 있습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회원의 개인정보 보호</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 개인정보 보호법 등 관계 법령이 정하는 바에 따라 이용자의 개인정보를
                    보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 회사의
                    개인정보취급방침이 적용됩니다.
                  </li>
                  <li>
                    회사가 제공하는 서비스가 아닌 제3자가 직접 이용자에게 제공하는 서비스에 대하여는
                    회사의 개인정보처리방침이 적용되지 않습니다.
                  </li>
                  <li>
                    회사는 회원의 귀책사유로 인하여 노출된 회원의 개인정보를 포함한 모든 정보에
                    대해서 일체의 책임을 지지 않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">개인정보의 관리</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회원은 서비스 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여, 담보제공
                    등의 처분행위를 할 수 없습니다.
                  </li>
                  <li>
                    아이디 및 비밀번호에 대한 관리책임은 전적으로 회원에게 있으며, 회원은 아이디 및
                    비밀번호를 타인에게 양도, 대여할 수 없습니다.
                  </li>
                  <li>
                    회사는 귀책사유 없는 아이디 또는 비밀번호의 유출, 양도, 대여로 인한 손실이나
                    손해에 대하여 아무런 책임을 지지 않습니다.
                  </li>
                  <li>
                    회원은 회원의 아이디 또는 비밀번호가 도용되거나 제3자가 무단 사용하고 있음을
                    인지한 경우, 지체 없이 회사에 통지하여야 하고, 회사의 안내가 있는 경우에는 그에
                    따라야 합니다. 회사에 이를 지체 없이 통지하지 않거나 통지한 경우에도 회사의
                    안내에 따르지 않은 경우에는 도용 또는 제3자의 무단 사용으로 인한 손실이나 손해에
                    대하여 회사는 아무런 책임을 지지 않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회원 정보의 변경</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회원은 서비스 이용신청 시 기재하거나 제공한 사항이 잘못되었거나 변경되었을 경우
                    즉시 회사에 해당 사항을 알려야 합니다.
                  </li>
                  <li>
                    회원은 최신의 정보를 유지하여야 할 의무를 부담하고, 회원 정보가 변경되었음에도
                    해당 사항을 수정하지 않음으로써 발생한 각종 손해와 잘못된 수정으로 인하여 발생한
                    손해는 당해 회원이 부담하여야 하며, 회사는 이에 대하여 아무런 책임을 지지
                    않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">개인정보의 위탁</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 수집된 개인정보의 취급 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나,
                    고객상담 및 지원, 이벤트 등 필요한 경우 회사가 선정한 제3자에 위탁할 수
                    있습니다.
                  </li>
                  <li>회사의 개인정보 위탁에 대해서는 회사의 개인정보처리방침이 적용됩니다.</li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">게시물의 관리</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 게시물이 다음 각 호의 어느 하나에 해당한다고 판단되는 경우 사전 통지 없이
                    비공개, 삭제 등의 조치를 취할 수 있으며, 이에 대해 회사는 어떠한 책임도 지지
                    않습니다.
                    <ol className="list-decimal p-4 list-inside space-y-2">
                      <li>
                        회사의 서비스 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는
                        유포하거나 상업적으로 이용하는 내용인 경우
                      </li>
                      <li>
                        회사와 기타 제3자의 저작권, 사생활 침해 등 기타 권리를 침해하는 내용인 경우
                      </li>
                      <li>
                        회사와 기타 제3자를 비방하거나 명예를 손상시키거나 업무를 방해하는 내용인
                        경우
                      </li>
                      <li>음란물을 게재, 공개하거나 음란사이트를 연결(링크)하는 경우</li>
                      <li>공공질서 및 미풍양속에 위반되는 경우</li>
                      <li>범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
                      <li>
                        전산, 정보기기의 오작동을 유발시킬 수 있는 컴퓨터 바이러스, 해킹, 악성코드
                        등의 프로그램을 유포하는 경우
                      </li>
                      <li>회사에서 제공하는 서비스와 관련 없는 내용인 경우</li>
                      <li>
                        불필요하거나 승인되지 않은 광고, 판촉물, 해킹, 영업을 통해 수익을 취하는
                        경우
                      </li>
                      <li>기타 관련법령 및 회사의 지침 등에 위반된다고 판단되는 경우</li>
                    </ol>
                  </li>
                  <li>
                    회사는 게시물에 관련된 세부 이용지침을 별도로 정하여 시행할 수 있으며, 회원은 그
                    지침에 따라 각종 게시물을 작성, 관리하여야 합니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">저작권 등의 귀속</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사가 작성한 저작물, 특히 회사가 제공하는 서비스(교육 플랫폼의 디자인, 구성, UI
                    등은 물론이고, 교육 동영상, 사진, 문서, 프로그래밍 문제와 예제 소스코드 및
                    테스트케이스 등 프로그래밍 교육 프로그램과 워크숍의 내용을 구성하는,
                    온라인/오프라인으로 제공되는 일체의 자료를 모두 포함합니다. 또한 디지털 콘텐츠에
                    한정되지 않습니다.)에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
                  </li>
                  <li>
                    회사가 제공하는 서비스 중 제휴계약에 의해 제공되는 저작물에 대한 저작권 기타
                    지적재산권은 해당 제공업체에 귀속합니다.
                  </li>
                  <li>
                    이용자는 회사가 제공하는 서비스를 이용함으로써 얻은 정보나 저작물 중 회사 또는
                    제공업체에 지적재산권이 귀속된 정보나 저작물을 회사 또는 제공업체의 사전승낙
                    없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나
                    제3자에게 이용하게 하여서는 안 됩니다. 이용자는 회사가 제공하는 서비스를 이
                    약관의 목적에 부합하는 범위 내에서만 이용 가능합니다.
                  </li>
                  <li>
                    회사는 이용자의 지적재산권 침해 행위를 감시하거나 차단하기 위하여 이용자의
                    서비스 이용 시간 동안 지적재산권 침해를 감시하거나 예방, 차단시키는 프로그램을
                    사용할 수 있고, 이용자의 지적재산권 침해 행위가 있는 경우 이용자에 대하여 민사,
                    형사상의 조치를 취할 수 있습니다.
                  </li>
                  <li>회사는 이용자의 저작물을 사용하는 경우 당해 권리자의 허락을 받습니다.</li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">통지</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사가 회원에게 개별 통지하는 경우, 이 약관에서 달리 정하지 않는 한 회원의
                    전자우편으로 통지하는 것을 원칙으로 합니다.
                  </li>
                  <li>
                    제1항에도 불구하고 회사가 불특정 다수의 회원에게 통지하는 경우 서비스 초기화면에
                    7일 이상 해당 사실을 게시 함으로서 개별 통지에 갈음할 수 있습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">손해배상</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를
                    배상할 책임이 있습니다. 다만, 행위자의 고의 또는 과실이 없는 경우에는 그러하지
                    아니합니다.
                  </li>
                  <li>
                    회사는 회사가 제공하는 무료서비스 이용과 관련하여 회원에게 발생한 어떠한 손해에
                    대해서도 책임을 지지 않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">회사의 면책</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>
                    회사는 다음 각 호의 어느 하나에 해당하는 사유에 의해 이용자에게 손해가 발생한
                    경우 손해 배상을 하지 않으며 책임이 면제됩니다.
                    <ol>
                      <li>
                        통신망의 사용불가 및 장애, 천재지변 또는 국가비상사태, 정전 및 이에 준하는
                        불가항력 상황이 발생한 경우
                      </li>
                      <li>회원의 고의나 과실로 인해 발생한 경우</li>
                      <li>서비스의 장애가 타 사업자가 제공하는 서비스에 의한 경우</li>
                      <li>
                        서비스 점검이 불가피하여 사전에 공지한 경우로 회사의 고의, 과실이 없는 경우
                      </li>
                      <li>홈페이지에 사전 공지된 정기점검으로 서비스를 중지했을 경우</li>
                      <li>
                        회원의 스마트기기, PC 등의 각종 유무선 장치의 사용 환경으로 인하여 문제가
                        발생하는 경우
                      </li>
                      <li>
                        회원 또는 제3자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성
                        등의 내용인 경우
                      </li>
                      <li>
                        회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우
                      </li>
                      <li>
                        기타 회사의 고의 또는 과실이 아닌 사유로 서비스 장애가 발생하거나 회원의
                        정보 또는 자료에 손상이 있는 경우
                      </li>
                    </ol>
                  </li>
                  <li>
                    회사는 회원의 귀책사유로 인한 서비스 이용의 중지, 사용제한, 데이터 삭제, 장애,
                    불이익에 대하여는 책임을 지지 않습니다.
                  </li>
                </ol>
              </li>
              <li className="space-y-2">
                <strong className="text-base font-bold">준거법 및 재판관할</strong>
                <ol className="list-decimal p-4 list-inside space-y-2">
                  <li>회사와 회원간 제기된 소송은 대한민국 법률을 준거법으로 합니다.</li>
                  <li>
                    회사와 회원간 발생한 분쟁에 관한 소송은 제소 당시의 회원의 주소에 의하고, 주소가
                    없는 경우 거소를 관할하는 지방 법원의 전속관할로 합니다. 단, 제소 당시 회원의
                    주소 또는 거소가 명확하지 아니한 경우의 관할법원은 민사소송법에 따라 정합니다.
                  </li>
                  <li>
                    해외에 주소나 거소가 있는 회원의 경우 회사와 회원간 발생한 분쟁에 관한 소송은
                    전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다.
                  </li>
                </ol>
              </li>
            </ol>
            <p>
              <strong className="text-base font-bold">부 칙</strong>
            </p>
            <ol>
              <li>
                <strong className="text-base font-bold">(시행일)</strong>
              </li>
            </ol>
            <p>본 이용약관은 2023년 5월 1일부터 적용합니다.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
