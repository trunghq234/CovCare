import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React from 'react';
import styles from './index.module.less';

const { Panel } = Collapse;

const TabContent = ({ id }) => {
  const tabcontents = [
    [
      {
        question: <h5>Coronavirus là gì?</h5>,
        answer: (
          <div>
            <p>
              Vào ngày 11 tháng 2 năm 2020, Tổ chức Y tế Thế giới đã công bố tên chính thức cho căn
              bệnh đang gây ra đợt bùng phát coronavirus mới năm 2019, lần đầu tiên được xác định ở
              Vũ Hán, Trung Quốc. Tên mới của căn bệnh này là bệnh coronavirus 2019, viết tắt là
              COVID-19. Trong COVID-19, ‘CO’ là viết tắt của ‘corona’, ‘VI’ là ‘virus’ và ‘D’ là
              bệnh. Trước đây, bệnh này được gọi là “coronavirus mới 2019” hoặc “2019-nCoV”.
            </p>
            <p>
              Một loại coronavirus mới là một loại coronavirus mới chưa được xác định trước đây. Vi
              rút gây bệnh coronavirus 2019 (COVID-19), không giống với{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                target="_blank"
                rel="noreferrer">
                coronavirus thường lưu hành ở người
              </a>{' '}
              và gây ra bệnh nhẹ, như cảm lạnh thông thường.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tại sao bệnh được gọi là bệnh do coronavirus 2019, COVID-19?</h5>,
        answer: (
          <div>
            <p>
              Vào ngày 11 tháng 2 năm 2020, Tổ chức Y tế Thế giới đã công bố tên chính thức cho căn
              bệnh đang gây ra đợt bùng phát coronavirus mới năm 2019, lần đầu tiên được xác định ở
              Vũ Hán, Trung Quốc. Tên mới của căn bệnh này là bệnh coronavirus 2019, viết tắt là
              COVID-19. Trong COVID-19, ‘CO’ là viết tắt của ‘corona’, ‘VI’ là ‘virus’ và ‘D’ là
              bệnh. Trước đây, bệnh này được gọi là “coronavirus mới 2019” hoặc “2019-nCoV”.
            </p>
            <p>
              Có{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                target="_blank"
                rel="noreferrer">
                nhiều loại
              </a>{' '}
              của coronavirus ở người, bao gồm một số loại thường gây ra các bệnh đường hô hấp trên
              nhẹ. COVID-19 là một bệnh mới, gây ra bởi một loại coronavirus mới (hoặc mới) chưa
              từng thấy ở người. Tên của căn bệnh này đã được chọn theo biểu tượng thực tiễn tốt
              nhất của Tổ chức Y tế Thế giới (WHO) để đặt tên cho các bệnh truyền nhiễm mới ở người.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>Làm thế nào để mọi người có thể giúp chấm dứt kỳ thị liên quan đến COVID-19?</h5>
        ),
        answer: (
          <div>
            <p>
              Mọi người có thể chống lại sự kỳ thị và giúp đỡ, không làm tổn thương những người khác
              bằng cách cung cấp hỗ trợ xã hội. Chống lại sự kỳ thị bằng cách tìm hiểu và chia sẻ sự
              thật. Thông báo sự thật rằng vi rút không nhắm vào các nhóm chủng tộc hoặc dân tộc cụ
              thể và cách COVID-19 thực sự lây lan có thể giúp chấm dứt kỳ thị.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tại sao ai đó có thể đổ lỗi hoặc trốn tránh các cá nhân và cộng đồng?</h5>,
        answer: (
          <div>
            <p>
              Mọi người ở Hoa Kỳ có thể lo lắng hoặc lo lắng về bạn bè và người thân đang sống trong
              hoặc đến thăm các khu vực lan truyền COVID-19. Một số người lo lắng về căn bệnh này.
              Sự sợ hãi và lo lắng có thể dẫn đến kỳ thị xã hội, chẳng hạn như đối với người Mỹ gốc
              Hoa hoặc người Mỹ gốc Á khác hoặc những người bị cách ly.
            </p>
            <p>
              Kỳ thị là sự phân biệt đối xử chống lại một nhóm người, một địa điểm hoặc một quốc gia
              có thể xác định được. Sự kỳ thị có liên quan đến sự thiếu hiểu biết về cách COVID-19
              lây lan, nhu cầu đổ lỗi cho ai đó, lo sợ về bệnh tật và cái chết, và những lời đồn
              thổi lan truyền những tin đồn và huyền thoại.
            </p>
            <p>
              Sự kỳ thị làm tổn thương mọi người bằng cách tạo ra sự sợ hãi hoặc tức giận hơn đối
              với những người bình thường thay vì căn bệnh đang gây ra vấn đề.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        question: <h5>Nguồn gốc vi rút là gì?</h5>,
        answer: (
          <div>
            <p>
              Coronavirus là một họ virus lớn. Một số gây bệnh cho người, và một số khác, chẳng hạn
              như coronavirus ở chó và mèo, chỉ lây nhiễm cho động vật. Hiếm khi, coronavirus gây
              bệnh cho động vật đã xuất hiện để lây nhiễm sang người và có thể lây lan giữa người
              với người. Điều này được nghi ngờ là đã xảy ra đối với vi-rút gây ra COVID-19. Hội
              chứng hô hấp Trung Đông (MERS) và Hội chứng hô hấp cấp tính nặng (SARS) là hai ví dụ
              khác về coronavirus có nguồn gốc từ động vật và sau đó lây lan sang người. Thông tin
              thêm về nguồn và sự lây lan của COVID-19 có sẵn trên{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/summary.html"
                target="_blank"
                rel="noreferrer">
                Tóm tắt tình huống: Nguồn và sự lây lan của Virus
              </a>
              .
            </p>
            <p>
              Một loại coronavirus mới là một loại coronavirus mới chưa được xác định trước đây. Vi
              rút gây bệnh coronavirus 2019 (COVID-19), không giống với
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                target="_blank"
                rel="noreferrer">
                coronavirus thường lưu hành ở người
              </a>{' '}
              và gây ra bệnh nhẹ, như cảm lạnh thông thường.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Virus lây lan như thế nào?</h5>,
        answer: (
          <div>
            <p>
              Loại virus này được phát hiện lần đầu tiên tại thành phố Vũ Hán, tỉnh Hồ Bắc, Trung
              Quốc. Các ca lây nhiễm đầu tiên liên quan đến chợ động vật sống, nhưng hiện nay vi-rút
              đang lây lan từ người sang người. Điều quan trọng cần lưu ý là sự lây lan giữa người
              với người có thể xảy ra liên tục. Một số loại vi rút rất dễ lây lan (như bệnh sởi),
              trong khi các loại vi rút khác ít lây lan hơn.
            </p>
            <p>
              Vi rút gây ra COVID-19 dường như đang lây lan dễ dàng và bền vững trong cộng đồng
              (“lan truyền cộng đồng”) ở{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
                target="_blank"
                rel="noreferrer">
                một số khu vực địa lý bị ảnh hưởng
              </a>
              . Sự lây lan trong cộng đồng có nghĩa là mọi người đã bị nhiễm vi rút trong một khu
              vực, bao gồm cả một số người không biết rõ họ bị nhiễm như thế nào hoặc ở đâu.
            </p>
            <p>
              Tìm hiểu những gì đã có về{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html"
                target="_blank"
                rel="noreferrer">
                sự lây lan của coronavirus mới xuất hiện
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Người đã bị COVID-19 có thể lây bệnh cho người khác không?</h5>,
        answer: (
          <div>
            <p>
              Nguyên nhân dẫn đến COVID-19 là{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
                target="_blank"
                rel="noreferrer">
                lây lan từ người này sang người khác
              </a>
              . Một người nào đó đang bị bệnh nặng với COVID-19 có thể lây bệnh cho người khác. Đó
              là lý do tại sao CDC khuyến cáo những bệnh nhân này nên được cách ly tại bệnh viện
              hoặc tại nhà (tùy thuộc vào mức độ bệnh của họ) cho đến khi họ khỏe hơn và không còn
              nguy cơ lây nhiễm cho người khác.
            </p>
            <p>
              Thời gian một người mắc bệnh nặng có thể khác nhau, vì vậy quyết định về thời điểm thả
              ai đó khỏi cách ly được đưa ra trên cơ sở từng trường hợp cụ thể với sự tham vấn của
              bác sĩ, chuyên gia phòng chống và kiểm soát nhiễm trùng và các quan chức y tế công
              cộng và bao gồm việc xem xét các chi tiết cụ thể của từng tình huống bao gồm mức độ
              nghiêm trọng của bệnh, các dấu hiệu và triệu chứng của bệnh và kết quả xét nghiệm
              trong phòng thí nghiệm cho bệnh nhân đó.
            </p>
            <p>
              Hiện tại{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-hospitalized-patients.html"
                target="_blank"
                rel="noreferrer">
                hướng dẫn của CDC về thời điểm có thể dỡ bỏ sự cách ly
              </a>{' '}
              được thực hiện theo từng trường hợp cụ thể và bao gồm việc đáp ứng tất cả các yêu cầu
              sau:
            </p>
            <ul>
              <li>Người bệnh hết sốt mà không cần dùng đến thuốc hạ sốt.</li>
              <li>Bệnh nhân không còn xuất hiện các triệu chứng, kể cả ho.</li>
              <li>
                Bệnh nhân có kết quả xét nghiệm âm tính trên ít nhất hai bệnh phẩm hô hấp liên tiếp
                được lấy cách nhau ít nhất 24 giờ.
              </li>
            </ul>
            <p>
              Một người nào đó đã được hết cách li không được coi là có nguy cơ lây nhiễm cho người
              khác.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Liệu thời tiết ấm áp có ngăn được sự bùng phát của COVID-19?</h5>,
        answer: (
          <div>
            <p>
              Hiện vẫn chưa rõ liệu thời tiết và nhiệt độ có ảnh hưởng đến sự lây lan của COVID-19
              hay không. Một số loại vi rút khác, như cảm lạnh thông thường và cúm, lây lan nhiều
              hơn trong những tháng thời tiết lạnh nhưng điều đó không có nghĩa là không thể bị bệnh
              với những vi rút này trong những tháng khác. Tại thời điểm này, vẫn chưa biết liệu khả
              năng lây lan của COVID-19 có giảm khi thời tiết trở nên ấm hơn hay không. Còn nhiều
              điều cần tìm hiểu về khả năng lây truyền, mức độ nghiêm trọng và các tính năng khác
              liên quan đến COVID-19 và các cuộc điều tra đang diễn ra.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>
            Vi-rút gây ra COVID-19 có thể lây lan qua thực phẩm, kể cả thực phẩm làm lạnh hoặc đông
            lạnh không?
          </h5>
        ),
        answer: (
          <div>
            <p>
              Coronavirus thường được cho là lây từ người sang người qua các giọt đường hô hấp. Hiện
              tại không có bằng chứng chứng minh sự lây truyền COVID-19 liên quan đến thực phẩm.
              Trước khi chế biến hoặc ăn thức ăn, điều quan trọng là phải luôn rửa tay bằng xà phòng
              và nước trong 20 giây để đảm bảo an toàn thực phẩm nói chung. Trong ngày, rửa tay sau
              khi xì mũi, ho hoặc hắt hơi, hoặc đi vệ sinh.
            </p>
            <p>
              Có thể một người có thể bị nhiễm COVID-19 bằng cách chạm vào bề mặt hoặc vật thể có
              vi-rút và sau đó chạm vào miệng, mũi hoặc có thể là mắt của họ, nhưng đây không được
              cho là cách chính của vi-rút. lây lan.
            </p>
            <p>
              Nói chung, do khả năng sống sót kém của các coronavirus này trên bề mặt, nên có khả
              năng rất thấp nguy cơ lây lan từ các sản phẩm thực phẩm hoặc bao bì được vận chuyển
              trong khoảng thời gian vài ngày hoặc vài tuần ở nhiệt độ môi trường xung quanh, tủ
              lạnh hoặc đông lạnh.
            </p>
            <p>
              Tìm hiểu những gì đã có về{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
                target="_blank"
                rel="noreferrer">
                lây lan COVID-19
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Lan truyền cộng đồng là gì?</h5>,
        answer: (
          <div>
            <p>
              Sự lây lan trong cộng đồng có nghĩa là mọi người đã bị nhiễm vi rút trong một khu vực,
              bao gồm cả một số người không biết rõ họ bị nhiễm như thế nào hoặc ở đâu.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        question: <h5>Tôi có thể làm gì để bảo vệ bản thân và ngăn ngừa bệnh lây lan?</h5>,
        answer: (
          <div>
            <h5>Các biện pháp bảo vệ cho mọi người</h5>
            <p>
              Nhận biết thông tin mới nhất về đợt bùng phát COVID-19, có trên trang web của WHO và
              thông qua cơ quan y tế công cộng quốc gia và địa phương của bạn. Nhiều quốc gia trên
              thế giới đã ghi nhận các trường hợp nhiễm COVID-19 và một số đã bùng phát. Các nhà
              chức trách ở Trung Quốc và một số quốc gia khác đã thành công trong việc làm chậm hoặc
              ngăn chặn sự bùng phát của chúng. Tuy nhiên, tình hình là không thể đoán trước được vì
              vậy hãy thường xuyên kiểm tra các tin tức mới nhất.
            </p>
            <p>
              Bạn có thể giảm nguy cơ bị nhiễm hoặc lây lan COVID-19 bằng cách thực hiện một số biện
              pháp phòng ngừa đơn giản:
            </p>
            <ul className={styles[`list-dot`]}>
              <li>
                Thường xuyên rửa tay sạch sẽ bằng dung dịch xoa tay có cồn hoặc rửa tay bằng xà
                phòng và nước..
                <br />
                <strong>Tại sao?</strong> Thường xuyên rửa tay sạch sẽ bằng dung dịch xoa tay có cồn
                hoặc rửa tay bằng xà phòng và nước.
              </li>
              <li>
                Duy trì khoảng cách ít nhất 1 mét (3 feet) giữa bạn và bất kỳ ai đang ho hoặc hắt
                hơi.
                <br />
                <strong>Tại sao?</strong> Khi ai đó ho hoặc hắt hơi, họ sẽ phun ra những giọt chất
                lỏng nhỏ từ mũi hoặc miệng có thể chứa vi rút. Nếu bạn ở quá gần, bạn có thể hít
                phải các giọt nhỏ, bao gồm cả vi rút COVID-19 nếu người ho mắc bệnh.
              </li>
              <li>
                Tránh chạm vào mắt, mũi và miệng.
                <br />
                <strong>Tại sao?</strong> Tay chạm vào nhiều bề mặt và có thể nhiễm vi rút. Sau khi
                bị ô nhiễm, tay có thể truyền vi-rút sang mắt, mũi hoặc miệng của bạn. Từ đó, vi rút
                có thể xâm nhập vào cơ thể bạn và có thể khiến bạn bị bệnh.
              </li>
              <li>
                Đảm bảo bạn và những người xung quanh tuân thủ vệ sinh đường hô hấp tốt. Điều này có
                nghĩa là che miệng và mũi của bạn bằng khuỷu tay cong hoặc khăn giấy khi bạn ho hoặc
                hắt hơi. Sau đó vứt bỏ khăn giấy đã sử dụng ngay lập tức.
                <br />
                <strong>Tại sao?</strong> Các giọt vi rút lây lan. Bằng cách tuân thủ vệ sinh đường
                hô hấp tốt, bạn bảo vệ những người xung quanh bạn khỏi các loại vi rút như cảm lạnh,
                cúm và COVID-19.
              </li>
              <li>
                Ở nhà nếu bạn cảm thấy không khỏe. Nếu bạn bị sốt, ho và khó thở, hãy tìm kiếm sự
                chăm sóc y tế và gọi điện trước. Thực hiện theo hướng dẫn của cơ quan y tế địa
                phương.
                <br />
                <strong>Tại sao?</strong> Chính quyền địa phương và quốc gia sẽ có thông tin cập
                nhật nhất về tình hình trong khu vực của bạn. Gọi điện trước sẽ cho phép nhà cung
                cấp dịch vụ chăm sóc sức khỏe của bạn nhanh chóng đưa bạn đến đúng cơ sở y tế. Điều
                này cũng sẽ bảo vệ bạn và giúp ngăn ngừa sự lây lan của vi rút và các bệnh nhiễm
                trùng khác.
              </li>
              <li>
                Luôn cập nhật các điểm nóng COVID-19 mới nhất (các thành phố hoặc khu vực địa phương
                nơi COVID-19 đang lan rộng). Nếu có thể, hãy tránh đi du lịch đến những nơi - đặc
                biệt nếu bạn là người lớn tuổi hoặc mắc bệnh tiểu đường, tim hoặc phổi.
                <br />
                <strong>Tại sao?</strong> Bạn có cơ hội cao hơn mắc COVID-19 ở một trong những khu
                vực này.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: <h5>Tôi nên làm gì nếu tiếp xúc gần gũi với người bị nhiễm COVID-19?</h5>,
        answer: (
          <div>
            <p>
              Các thành viên gia đình, đối tác thân thiết và người chăm sóc trong cơ sở không chăm
              sóc sức khỏe có thể tiếp xúc gần với một người mắc bệnh COVID-19 có triệu chứng, đã
              được phòng thí nghiệm xác nhận hoặc một người đang được điều tra. Những người tiếp xúc
              gần gũi nên theo dõi sức khỏe của họ; họ nên gọi cho nhà cung cấp dịch vụ chăm sóc sức
              khỏe của mình ngay lập tức nếu họ xuất hiện các triệu chứng gợi ý đến COVID-19 (ví dụ:
              sốt, ho, khó thở)
            </p>
            <p>Những người liên hệ gần gũi cũng phải tuân theo các khuyến nghị sau:</p>
            <ul className={styles[`list-dot`]}>
              <li>
                Đảm bảo rằng bạn hiểu và có thể giúp bệnh nhân làm theo hướng dẫn của nhà cung cấp
                dịch vụ chăm sóc sức khỏe của họ về (các) loại thuốc và dịch vụ chăm sóc. Bạn nên
                giúp bệnh nhân với những nhu cầu cơ bản tại nhà và hỗ trợ việc mua hàng tạp hóa, đơn
                thuốc và các nhu cầu cá nhân khác.
              </li>
              <li>
                Theo dõi các triệu chứng của bệnh nhân. Nếu bệnh nhân ngày càng ốm nặng, hãy gọi cho
                nhà cung cấp dịch vụ chăm sóc sức khỏe của họ và nói với họ rằng bệnh nhân có
                COVID-19 đã được phòng thí nghiệm xác nhận. Điều này sẽ giúp văn phòng của nhà cung
                cấp dịch vụ chăm sóc sức khỏe thực hiện các bước để giữ cho những người khác trong
                văn phòng hoặc phòng chờ không bị nhiễm bệnh. Yêu cầu nhà cung cấp dịch vụ chăm sóc
                sức khỏe gọi cho sở y tế địa phương hoặc tiểu bang để được hướng dẫn thêm. Nếu bệnh
                nhân có trường hợp khẩn cấp về y tế và bạn cần gọi 115, hãy thông báo cho nhân viên
                điều phối mà bệnh nhân đã hoặc đang được đánh giá về COVID-19.
              </li>
              <li>
                Các thành viên trong gia đình nên ở trong một phòng khác hoặc càng xa bệnh nhân càng
                tốt. Các thành viên trong gia đình nên sử dụng phòng ngủ và phòng tắm riêng biệt,
                nếu có.
              </li>
              <li>Cấm những người không có nhu cầu thiết yếu đến thăm nhà.</li>
              <li>
                Các thành viên trong gia đình nên chăm sóc cho bất kỳ vật nuôi nào trong nhà. Không
                tiếp xúc với vật nuôi hoặc động vật khác khi bị bệnh.&nbsp; Để biết thêm thông tin,
                hãy xem{' '}
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html/#2019-nCoV-and-animals"
                  target="_blank"
                  rel="noreferrer">
                  COVID-19 và động vật
                </a>
                .
              </li>
              <li>
                Đảm bảo rằng các không gian chung trong nhà có luồng không khí tốt, chẳng hạn như
                máy điều hòa không khí hoặc cửa sổ mở, nếu thời tiết cho phép.
              </li>
              <li>
                Thực hiện vệ sinh tay thường xuyên. Thường xuyên rửa tay bằng xà phòng và nước trong
                ít nhất 20 giây hoặc sử dụng chất khử trùng tay có cồn chứa 60 đến 95% cồn, phủ lên
                tất cả các bề mặt của bàn tay và chà xát chúng với nhau cho đến khi chúng cảm thấy
                khô. Nên ưu tiên sử dụng xà phòng và nước nếu tay thấy bẩn.
              </li>
              <li>Tránh chạm vào mắt, mũi và miệng của bạn bằng tay chưa rửa sạch.</li>
              <li>
                Bệnh nhân nên đeo khẩu trang khi bạn ở gần những người khác. Nếu bệnh nhân không thể
                đeo khẩu trang (ví dụ, vì nó gây khó thở), bạn, với tư cách là người chăm sóc, nên
                đeo khẩu trang khi ở cùng phòng với bệnh nhân.
              </li>
              <li>
                Mang khẩu trang và găng tay dùng một lần khi bạn chạm hoặc tiếp xúc với máu, phân
                hoặc chất dịch cơ thể của bệnh nhân, chẳng hạn như nước bọt, đờm, chất nhầy mũi,
                chất nôn, nước tiểu.
                <ul>
                  <li>
                    Vứt khẩu trang và găng tay dùng một lần sau khi sử dụng. Không sử dụng lại.
                  </li>
                  <li>
                    Khi tháo thiết bị bảo hộ cá nhân, trước tiên hãy tháo và vứt bỏ găng tay. Sau
                    đó, ngay lập tức rửa tay sạch bằng xà phòng và nước hoặc chất khử trùng tay có
                    cồn. Tiếp theo, tháo và vứt khẩu trang, ngay lập tức rửa tay sạch sẽ bằng xà
                    phòng và nước hoặc chất khử trùng tay có cồn.
                  </li>
                </ul>
              </li>
              <li>
                Tránh dùng chung đồ gia dụng với người bệnh. Bạn không nên dùng chung bát đĩa, ly
                uống nước, cốc, dụng cụ ăn uống, khăn tắm, bộ đồ giường hoặc các vật dụng khác. Sau
                khi bệnh nhân sử dụng các vật dụng này, bạn nên giặt kỹ (xem phần “Giặt kỹ đồ giặt”
                bên dưới).
              </li>
              <li>
                Làm sạch tất cả các bề mặt “cảm ứng cao”, chẳng hạn như quầy, mặt bàn, tay nắm cửa,
                đồ đạc trong phòng tắm, nhà vệ sinh, điện thoại, bàn phím, máy tính bảng và bàn cạnh
                giường, mỗi ngày. Ngoài ra, hãy lau sạch bất kỳ bề mặt nào có thể dính máu, phân
                hoặc dịch cơ thể.
                <ul>
                  <li>
                    Sử dụng bình xịt tẩy rửa gia dụng hoặc lau theo hướng dẫn trên nhãn. Nhãn chứa
                    hướng dẫn sử dụng sản phẩm làm sạch an toàn và hiệu quả, bao gồm các biện pháp
                    phòng ngừa bạn nên thực hiện khi sử dụng sản phẩm, chẳng hạn như đeo găng tay và
                    đảm bảo rằng bạn có hệ thống thông gió tốt trong quá trình sử dụng sản phẩm.
                  </li>
                </ul>
              </li>
              <li>
                Giặt đồ giặt kỹ lưỡng.
                <ul>
                  <li>
                    Cởi bỏ và giặt ngay quần áo hoặc bộ đồ giường có dính máu, phân hoặc chất dịch
                    cơ thể.
                  </li>
                  <li>
                    Mang găng tay dùng một lần trong khi xử lý các đồ bẩn và giữ các đồ bẩn tránh xa
                    cơ thể của bạn. Rửa tay sạch sẽ (bằng xà phòng và nước hoặc chất khử trùng tay
                    có cồn) ngay sau khi tháo găng tay.
                  </li>
                  <li>
                    Đọc và làm theo hướng dẫn trên nhãn của đồ giặt hoặc quần áo và chất tẩy rửa.
                    Nói chung, sử dụng bột giặt thông thường theo hướng dẫn của máy giặt và sấy khô
                    hoàn toàn bằng nhiệt độ ấm nhất được khuyến nghị trên nhãn quần áo.
                  </li>
                </ul>
              </li>
              <li>
                Đặt tất cả găng tay, khẩu trang và các vật dụng bị ô nhiễm khác đã qua sử dụng vào
                thùng có lót trước khi vứt chúng cùng với rác thải sinh hoạt khác. Làm sạch tay của
                bạn (bằng xà phòng và nước hoặc chất khử trùng tay có cồn) ngay sau khi tiếp xúc với
                các vật dụng này. Nên ưu tiên sử dụng xà phòng và nước nếu tay thấy bẩn.
              </li>
              <li>
                Thảo luận bất kỳ câu hỏi bổ sung nào với sở y tế hoặc nhà cung cấp dịch vụ chăm sóc
                sức khỏe của tiểu bang hoặc địa phương của bạn. Kiểm tra giờ có sẵn khi liên hệ với
                sở y tế địa phương của bạn.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: <h5>Ai có nguy cơ mắc bệnh nghiêm trọng do COVID-19 cao hơn?</h5>,
        answer: (
          <div>
            <p>
              <strong>
                Người lớn tuổi và những người ở mọi lứa tuổi có tình trạng bệnh lý cơ bản nghiêm
                trọng
              </strong>{' '}
              có thể có nguy cơ cao bị các biến chứng nghiêm trọng hơn do COVID-19. Những người này
              có thể có nguy cơ bị bệnh nặng do bệnh này cao hơn, bao gồm:
            </p>
            <ul className={styles[`list-dot`]}>
              <li>
                <strong>Người cao tuổi</strong>
              </li>
              <li>
                <strong>Những người có tình trạng bệnh lý cơ bản nghiêm trọng</strong> như:
                <ul>
                  <li>Bệnh tim</li>
                  <li>Bệnh tiểu đường</li>
                  <li>Bệnh phổi</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: (
          <h5>Những người có nguy cơ mắc bệnh nghiêm trọng cao hơn với COVID-19 nên làm gì?</h5>
        ),
        answer: (
          <div>
            <p>
              Nếu bạn có nhiều nguy cơ bị bệnh nặng do COVID-19, bạn nên: dự trữ vật tư; thực hiện
              các biện pháp phòng ngừa hàng ngày để giữ khoảng cách giữa bạn và người khác; khi bạn
              đi ra ngoài nơi công cộng, hãy tránh xa những người khác đang bị bệnh; hạn chế tiếp
              xúc gần và rửa tay thường xuyên; và tránh đám đông, du lịch bằng tàu biển, và du lịch
              không cần thiết. Nếu có dịch bùng phát trong cộng đồng của bạn, hãy ở nhà càng nhiều
              càng tốt. Theo dõi các triệu chứng và dấu hiệu khẩn cấp. Nếu bạn bị ốm, hãy ở nhà và
              gọi cho bác sĩ của bạn. Trên trang{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html"
                target="_blank"
                rel="noreferrer">
                Những người có nguy cơ mắc bệnh nghiêm trọng do COVID-19
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tôi có nên đeo khẩu trang để bảo vệ mình không?</h5>,
        answer: (
          <div>
            <p>
              Chỉ đeo khẩu trang nếu bạn bị bệnh với các triệu chứng COVID-19 (đặc biệt là ho) hoặc
              đang chăm sóc người có thể bị COVID-19. Mặt nạ dùng một lần chỉ có thể được sử dụng
              một lần. Nếu bạn không bị bệnh hoặc đang chăm sóc người bị bệnh thì bạn đang lãng phí
              một chiếc mặt nạ. Sự thiếu hụt khẩu trang trên toàn thế giới, vì vậy WHO khuyến cáo
              mọi người sử dụng khẩu trang một cách khôn ngoan.
            </p>
            <p>
              WHO khuyến cáo sử dụng hợp lý khẩu trang y tế để tránh lãng phí nguồn tài nguyên quý
              giá không cần thiết và sử dụng khẩu trang sai mục đích (
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
                target="_blank"
                rel="noreferrer">
                xem Lời khuyên về việc sử dụng mặt nạ
              </a>
              ).
            </p>
            <p>
              Các cách hiệu quả nhất để bảo vệ bản thân và những người khác chống lại COVID-19 là
              thường xuyên rửa tay sạch sẽ, che vết ho bằng cách gập khuỷu tay hoặc khăn giấy và duy
              trì khoảng cách ít nhất 1 mét (3 feet) với những người đang ho hoặc hắt hơi. . Xem các
              biện pháp bảo vệ cơ bản chống lại coronavirus mới để biết thêm thông tin.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        question: <h5>Các triệu chứng của COVID-19 là gì?</h5>,
        answer: (
          <div>
            <p>
              Các triệu chứng phổ biến nhất của COVID-19 là sốt, mệt mỏi và ho khan. Một số bệnh
              nhân có thể bị đau nhức, nghẹt mũi, chảy nước mũi, đau họng hoặc tiêu chảy. Các triệu
              chứng này thường nhẹ và bắt đầu dần dần. Một số người bị nhiễm bệnh nhưng không phát
              triển bất kỳ triệu chứng nào và không cảm thấy không khỏe. Hầu hết mọi người (khoảng
              80%) khỏi bệnh mà không cần điều trị đặc biệt. Cứ 6 người thì có 1 người nhiễm
              COVID-19 bị bệnh nặng và khó thở. Những người lớn tuổi và những người có các vấn đề y
              tế tiềm ẩn như huyết áp cao, các vấn đề về tim hoặc tiểu đường, có nhiều khả năng phát
              triển bệnh nghiêm trọng hơn. Những người bị sốt, ho và khó thở nên đi khám.
            </p>
            <p>
              Đọc về{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                target="_blank"
                rel="noreferrer">
                Các triệu chứng COVID-19 từ CDC.gov
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tôi có nên xét nghiệm COVID-19 không?</h5>,
        answer: (
          <div>
            <p>
              Không phải ai cũng cần phải được kiểm tra COVID-19. Để biết thông tin về thử nghiệm,
              hãy xem{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
                target="_blank"
                rel="noreferrer">
                Kiểm tra COVID-19
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tôi có thể kiểm tra COVID-19 ở đâu?</h5>,
        answer: (
          <div>
            <p>
              Quy trình và địa điểm kiểm tra khác nhau ở mỗi nơi. Liên hệ với bộ phận tiểu bang, địa
              phương, bộ lạc hoặc lãnh thổ của bạn để biết thêm thông tin hoặc liên hệ với nhà cung
              cấp dịch vụ y tế. Các sở y tế công cộng của tiểu bang và địa phương đã nhận được các
              xét nghiệm từ CDC trong khi các nhà cung cấp dịch vụ y tế đang nhận các xét nghiệm do
              các nhà sản xuất thương mại phát triển. Trong khi nguồn cung cấp các bài kiểm tra này
              đang tăng lên, vẫn có thể khó tìm được nơi nào đó để làm bài kiểm tra.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>
            Một người có thể xét nghiệm âm tính và sau đó xét nghiệm dương tính với COVID-19 không?
          </h5>
        ),
        answer: (
          <div>
            <p>
              Sử dụng xét nghiệm chẩn đoán do CDC phát triển, kết quả âm tính có nghĩa là không tìm
              thấy vi-rút gây ra COVID-19 trong mẫu của người đó. Trong giai đoạn đầu của nhiễm
              trùng, có thể vi-rút sẽ không được phát hiện.
            </p>
            <p>
              Đối với COVID-19, kết quả xét nghiệm âm tính đối với mẫu được thu thập trong khi một
              người có các triệu chứng có thể có nghĩa là vi rút COVID-19 không gây ra bệnh hiện tại
              của họ.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        question: <h5>Tôi nên làm gì nếu có một đợt bùng phát trong cộng đồng của tôi?</h5>,
        answer: (
          <div>
            <p>
              Trong thời gian bùng phát, hãy bình tĩnh và chuẩn bị sẵn sàng kế hoạch để phát huy tác
              dụng. Làm theo các bước dưới đây:
            </p>
            <p>
              <strong>
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/about/prevention-treatment.html"
                  target="_blank"
                  rel="noreferrer">
                  Bảo vệ bạn và những người khác
                </a>
                .
              </strong>
            </p>
            <ul className={styles[`list-dot`]}>
              <li>
                Ở nhà nếu bạn bị ốm. Tránh xa những người bị bệnh. Hạn chế tiếp xúc gần với người
                khác càng nhiều càng tốt (khoảng 6 feet).
              </li>
            </ul>
            <p>
              <strong>Đưa kế hoạch gia đình của bạn vào thực hiện. </strong>
            </p>
            <ul className={styles[`list-dot`]}>
              <li>
                <strong>Cập nhật thông tin về tình hình COVID-19 tại địa phương</strong>. Hãy lưu ý
                về các trường hợp tan học tạm thời trong khu vực của bạn, vì điều này có thể ảnh
                hưởng đến thói quen hàng ngày của gia đình bạn.
              </li>
              <li>
                <strong>Tiếp tục thực hành các hành động phòng ngừa hàng ngày. </strong>Che khi ho
                và hắt hơi bằng khăn giấy và rửa tay thường xuyên bằng xà phòng và nước trong ít
                nhất 20 giây. Nếu không có xà phòng và nước, hãy sử dụng chất khử trùng tay chứa 60%
                cồn. Làm sạch các bề mặt và đồ vật thường xuyên chạm vào hàng ngày bằng nước và chất
                tẩy rửa gia dụng thông thường.
              </li>
              <li>
                <strong>
                  Thông báo cho nơi làm việc của bạn càng sớm càng tốt nếu lịch làm việc thường
                  xuyên của bạn thay đổi.
                </strong>{' '}
                Yêu cầu làm việc tại nhà hoặc xin nghỉ phép nếu bạn hoặc ai đó trong gia đình của
                bạn bị ốm{' '}
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
                  target="_blank"
                  rel="noreferrer">
                  Các triệu chứng nhiễm covid-19
                </a>
                , hoặc nếu trường học của con bạn tạm thời bị giải tán.{' '}
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/guidance-business-response.html"
                  target="_blank"
                  rel="noreferrer">
                  Tìm hiểu cách các doanh nghiệp và nhà tuyển dụng có thể lập kế hoạch và phản hồi
                  với COVID-19.
                </a>
              </li>
              <li>
                <strong>Giữ liên lạc với những người khác qua điện thoại hoặc email. </strong>Nếu
                bạn bị bệnh mãn tính và sống một mình, hãy nhờ gia đình, bạn bè và các nhà cung cấp
                dịch vụ chăm sóc sức khỏe kiểm tra bạn trong thời gian bùng phát. Giữ liên lạc với
                gia đình và bạn bè, đặc biệt là những người có nhiều nguy cơ phát triển bệnh nặng,
                chẳng hạn như người lớn tuổi và những người mắc bệnh mãn tính nặng.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: (
          <h5>
            Làm cách nào để chuẩn bị cho con tôi trong trường hợp bùng phát COVID-19 trong cộng đồng
            của chúng tôi?
          </h5>
        ),
        answer: (
          <div>
            <p>
              Các đợt bùng phát có thể gây căng thẳng cho người lớn và trẻ em. Nói chuyện với con
              bạn về sự bùng phát, cố gắng giữ bình tĩnh và trấn an chúng rằng chúng vẫn an toàn.
              Nếu thích hợp, hãy giải thích cho họ rằng hầu hết các bệnh do COVID-19 đều có vẻ nhẹ.
            </p>
            <p>
              <a
                href="https://www.cdc.gov/childrenindisasters/helping-children-cope.html"
                target="_blank"
                rel="noreferrer">
                Trẻ em phản ứng với các tình huống căng thẳng khác với người lớn
              </a>
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>
            Cha mẹ nên thực hiện những bước nào để bảo vệ trẻ em khi bùng phát dịch bệnh tại cộng
            đồng?
          </h5>
        ),
        answer: (
          <div>
            <p>
              Đây là một loại vi-rút mới và chúng tôi vẫn đang tìm hiểu về nó, nhưng cho đến nay,
              dường như không có nhiều bệnh ở trẻ em. Hầu hết bệnh tật, kể cả bệnh nghiêm trọng, đều
              xảy ra ở người lớn trong độ tuổi lao động và người lớn tuổi. Nếu có trường hợp
              COVID-19 ảnh hưởng đến trường học của con bạn, nhà trường có thể đuổi học sinh. Theo
              dõi các trường hợp tan học trong cộng đồng của bạn. Đọc hoặc xem các nguồn truyền
              thông địa phương đưa tin về việc trường học bị đuổi học. Nếu các trường học tạm thời
              bị đuổi việc, hãy sử dụng các phương án chăm sóc trẻ thay thế, nếu cần.
            </p>
            <p>
              Nếu con bạn / con bạn bị bệnh với COVID-19, hãy thông báo cho cơ sở chăm sóc trẻ em
              hoặc trường học của họ. Nói chuyện với giáo viên về các bài tập trên lớp và các hoạt
              động mà họ có thể làm ở nhà để theo kịp bài vở ở trường.
            </p>
            <p>
              Ngăn cản trẻ em và thanh thiếu niên tụ tập ở những nơi công cộng khác khi tan trường
              để giúp làm chậm sự lây lan của COVID-19 trong cộng đồng.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>Trường học có bị sa thải nếu có sự bùng phát trong cộng đồng của tôi không?</h5>
        ),
        answer: (
          <div>
            <p>
              Tùy thuộc vào tình hình, các quan chức y tế công cộng có thể khuyến nghị các hành động
              cộng đồng để giảm phơi nhiễm với COVID-19, chẳng hạn như cho nghỉ học. Đọc hoặc xem
              các nguồn truyền thông địa phương đưa tin về các trường hợp tan học hoặc theo dõi
              thông tin liên lạc từ trường học của con bạn. Nếu trường học tạm thời bị đuổi việc,
              không khuyến khích học sinh và nhân viên tụ tập hoặc giao lưu ở bất cứ đâu, chẳng hạn
              như ở nhà bạn bè, nhà hàng yêu thích hoặc trung tâm mua sắm địa phương.
            </p>
          </div>
        ),
      },
      {
        question:
          'Vi-rút gây ra COVID-19 có thể lây lan qua thực phẩm, kể cả thực phẩm làm lạnh hoặc đông lạnh không?',
        answer: (
          <div>
            <p>
              Coronavirus thường được cho là lây từ người sang người qua các giọt đường hô hấp. Hiện
              tại không có bằng chứng chứng minh sự lây truyền COVID-19 liên quan đến thực phẩm.
              Trước khi chế biến hoặc ăn thức ăn, điều quan trọng là phải luôn rửa tay bằng xà phòng
              và nước trong 20 giây để đảm bảo an toàn thực phẩm nói chung. Trong ngày, rửa tay sau
              khi xì mũi, ho hoặc hắt hơi, hoặc đi vệ sinh.
            </p>
            <p>
              Có thể một người có thể bị nhiễm COVID-19 bằng cách chạm vào bề mặt hoặc vật thể có
              vi-rút và sau đó chạm vào miệng, mũi hoặc có thể là mắt của họ, nhưng đây không được
              cho là cách chính của vi-rút. lây lan.
            </p>
            <p>
              Nói chung, do khả năng sống sót kém của các coronavirus này trên bề mặt, nên có khả
              năng rất thấp nguy cơ lây lan từ các sản phẩm thực phẩm hoặc bao bì được vận chuyển
              trong khoảng thời gian vài ngày hoặc vài tuần ở nhiệt độ môi trường xung quanh, tủ
              lạnh hoặc đông lạnh.
            </p>
            <p>
              Tìm hiểu những gì đã có về{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
                target="_blank"
                rel="noreferrer">
                lây lan COVID-19
              </a>
              .
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tôi có nên đi làm nếu có dịch bùng phát trong cộng đồng của tôi không?</h5>,
        answer: (
          <div>
            <p>
              Thực hiện theo lời khuyên của các quan chức y tế địa phương của bạn. Hãy ở nhà nếu bạn
              có thể. Nói chuyện với chủ nhân của bạn để thảo luận về việc làm việc tại nhà, xin
              nghỉ phép nếu bạn hoặc ai đó trong gia đình của bạn bị ốm{' '}
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
                target="_blank"
                rel="noreferrer">
                Các triệu chứng nhiễm covid-19
              </a>
              , hoặc nếu trường học của con bạn tạm thời bị đuổi học. Người sử dụng lao động nên
              biết rằng nhiều nhân viên có thể cần phải ở nhà để chăm sóc trẻ em bị bệnh hoặc các
              thành viên khác trong gia đình bị ốm hơn bình thường trong trường hợp bùng phát cộng
              đồng.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        question: <h5>Vi rút COVID-19 có thể lây truyền ở những vùng có khí hậu nóng ẩm?</h5>,
        answer: (
          <div>
            <p>
              Từ các bằng chứng cho đến nay, virus COVID-19 có thể lây truyền ở TẤT CẢ CÁC VÙNG, kể
              cả những khu vực có thời tiết nóng ẩm. Bất kể khí hậu như thế nào, hãy áp dụng các
              biện pháp bảo vệ nếu bạn sống hoặc đi đến khu vực báo cáo COVID-19. Cách tốt nhất để
              bảo vệ bạn khỏi COVID-19 là thường xuyên vệ sinh tay của bạn. Bằng cách này, bạn loại
              bỏ vi rút có thể có trên tay và tránh nhiễm trùng có thể xảy ra khi chạm vào mắt,
              miệng và mũi của bạn.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Thời tiết lạnh và tuyết KHÔNG THỂ tiêu diệt được coronavirus mới</h5>,
        answer: (
          <div>
            <p>
              Không có lý do gì để tin rằng thời tiết lạnh có thể giết chết coronavirus mới hoặc các
              bệnh khác. Nhiệt độ cơ thể bình thường của con người duy trì trong khoảng 36,5 ° C đến
              37 ° C, bất kể nhiệt độ bên ngoài hoặc thời tiết. Cách hiệu quả nhất để bảo vệ bản
              thân chống lại loại vi rút coronavirus mới là thường xuyên vệ sinh tay bằng cồn xoa
              bóp hoặc rửa tay bằng xà phòng và nước.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Tắm nước nóng không ngăn ngừa được bệnh coronavirus mới</h5>,
        answer: (
          <div>
            <p>
              Tắm nước nóng sẽ không ngăn bạn nhiễm COVID-19. Nhiệt độ cơ thể bình thường của bạn
              duy trì trong khoảng 36,5 ° C đến 37 ° C, bất kể nhiệt độ của bồn tắm hoặc vòi hoa sen
              của bạn. Trên thực tế, tắm nước nóng với nước quá nóng có thể có hại, vì nó có thể làm
              bạn bị bỏng. Cách tốt nhất để bảo vệ bạn khỏi COVID-19 là thường xuyên vệ sinh tay của
              bạn. Bằng cách này, bạn loại bỏ vi rút có thể có trên tay và tránh nhiễm trùng có thể
              xảy ra khi chạm vào mắt, miệng và mũi của bạn.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Loại coronavirus mới KHÔNG THỂ lây truyền qua vết muỗi đốt.</h5>,
        answer: (
          <div>
            <p>
              Cho đến nay vẫn chưa có thông tin cũng như bằng chứng nào cho thấy loại coronavirus
              mới có thể được truyền qua muỗi. Virus coronavirus mới là một loại virus đường hô hấp,
              lây lan chủ yếu qua các giọt nhỏ được tạo ra khi người bệnh ho hoặc hắt hơi, hoặc qua
              các giọt nước bọt hoặc dịch tiết ra từ mũi. Để bảo vệ bản thân, hãy thường xuyên rửa
              tay sạch bằng dung dịch xoa tay có cồn hoặc rửa tay bằng xà phòng và nước. Ngoài ra,
              tránh tiếp xúc gần với bất kỳ ai đang ho và hắt hơi.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Máy sấy tay có hiệu quả trong việc tiêu diệt coronavirus mới không?</h5>,
        answer: (
          <div>
            <p>
              Không. Máy sấy tay không hiệu quả trong việc tiêu diệt 2019-nCoV. Để bảo vệ bản thân
              chống lại loại coronavirus mới, bạn nên thường xuyên rửa tay bằng chất tẩy rửa tay có
              cồn hoặc rửa tay bằng xà phòng và nước. Khi tay đã được làm sạch, bạn nên lau khô bằng
              khăn giấy hoặc máy sấy khí ấm.
            </p>
          </div>
        ),
      },
      {
        question: <h5>Đèn khử trùng tia cực tím có thể tiêu diệt loại coronavirus mới không?</h5>,
        answer: (
          <div>
            <p>
              Không nên sử dụng đèn UV để khử trùng tay hoặc các vùng da khác vì tia UV có thể gây
              kích ứng da.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>
            Máy đo nhiệt hiệu quả như thế nào trong việc phát hiện những người bị nhiễm coronavirus
            mới?
          </h5>
        ),
        answer: (
          <div>
            <p>
              Máy đo nhiệt có hiệu quả trong việc phát hiện những người bị sốt (tức là có nhiệt độ
              cơ thể cao hơn bình thường) do nhiễm loại coronavirus mới.
            </p>
            <p>
              Tuy nhiên, họ không thể phát hiện ra những người bị nhiễm bệnh nhưng chưa sốt. Điều
              này là do phải mất từ ​​2 đến 10 ngày trước khi những người bị nhiễm bệnh bị ốm và
              phát sốt.
            </p>
          </div>
        ),
      },
      {
        question: (
          <h5>Thuốc chủng ngừa viêm phổi có bảo vệ bạn chống lại coronavirus mới không?</h5>
        ),
        answer: (
          <div>
            <p>
              Không. Thuốc chủng ngừa viêm phổi, chẳng hạn như vắc-xin phế cầu và vắc-xin
              Haemophilus cúm loại B (Hib), không bảo vệ chống lại vi-rút coronavirus mới.
            </p>
            <p>
              Virus này rất mới và khác biệt nên nó cần có vắc xin riêng. Các nhà nghiên cứu đang cố
              gắng phát triển một loại vắc-xin chống lại 2019-nCoV và WHO đang hỗ trợ nỗ lực của họ.
            </p>
            <p>
              Mặc dù các loại vắc xin này không có hiệu quả chống lại 2019-nCoV, nhưng việc tiêm
              phòng các bệnh về đường hô hấp rất được khuyến khích để bảo vệ sức khỏe của bạn.
            </p>
          </div>
        ),
      },
    ],
  ];
  return (
    <div>
      <Collapse
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
        expandIconPosition="right"
        className={styles['site-collapse-custom-collapse']}>
        {tabcontents[parseInt(id)].map((content, index) => {
          return (
            <Panel header={content.question} key={content.question} className={styles[' ']}>
              {content.answer}
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default TabContent;
