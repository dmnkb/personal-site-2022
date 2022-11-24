import type { NextPage } from "next";
import Link from "../components/Link";
import ContentWrapper from "../components/ContentWrapper";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";

const PrivacyPolicy: NextPage = () => (
  <Layout pageTitle="Startseite" className="bg-background">
    <ContentWrapper className="text-white">
      <Link
        href="/"
        text="Zurück"
        renderAsButton
        arrow="back"
        className="mb-12"
      ></Link>
      <Headline tag="h1">Datenschutz</Headline>
      <Headline tag="h2" className="mt-10">
        1. Datenschutz auf einen Blick
      </Headline>
      <Headline tag="h3" className="mt-10">
        Allgemeine Hinweise
      </Headline>
      <Paragraph size="small" className="my-5">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Datenerfassung auf dieser Website
      </Headline>
      <Headline tag="h4" className="mt-10">
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </Headline>
      <Paragraph size="small" className="my-5">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
        zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </Paragraph>
      <Headline tag="h4" className="mt-10">
        Wie erfassen wir Ihre Daten?{" "}
      </Headline>
      <Paragraph size="small" className="my-5">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
        der Website durch unsere ITSysteme erfasst. Das sind vor allem
        technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
        Sie diese Website betreten.
      </Paragraph>
      <Headline tag="h4" className="mt-10">
        Wofür nutzen wir Ihre Daten?
      </Headline>
      <Paragraph size="small" className="my-5">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </Paragraph>
      <Headline tag="h4" className="mt-10">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </Headline>
      <Paragraph size="small" className="my-5">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
        jederzeit an uns wenden.
      </Paragraph>
      {/* <Headline tag="h3" className="mt-10">
        Analyse-Tools und Tools von Drittanbietern
        </Headline>
        <Paragraph size="small" className="my-5">
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit sogenannten
        Analyseprogrammen.
        </Paragraph>
        <Paragraph size="small" className="my-5">
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
        folgenden Datenschutzerklärung.
      </Paragraph> */}
      <Headline tag="h2" className="mt-10">
        2. Hosting
      </Headline>
      <Paragraph size="small" className="my-5">
        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Externes Hosting
      </Headline>
      <Paragraph size="small" className="my-5">
        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
        dieser Website erfasst werden, werden auf den Servern des Hosters / der
        Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
        Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
        Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
        Website generiert werden, handeln.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
        unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO)
        und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen
        Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
        soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten,
        wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und
        unsere Weisungen in Bezug auf diese Daten befolgen.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Wir setzen folgende(n) Hoster ein:
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Netlify, Inc.
        <br />
        44 Montgomery Street
        <br />
        Suite 300
        <br />
        San Francisco
        <br />
        California 94104.
      </Paragraph>
      <Headline tag="h2" className="mt-10">
        3. Allgemeine Hinweise und Pflichtinformationen
      </Headline>
      <Headline tag="h3" className="mt-10">
        Datenschutz
      </Headline>
      <Paragraph size="small" className="my-5">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Hinweis zur verantwortlichen Stelle
      </Headline>
      <Paragraph size="small" className="my-5">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Dominik Borchert
        <br />
        Elmshorner Straße 85
        <br />
        25421 Pinneberg
      </Paragraph>
      <Paragraph size="small" className="my-5">
        {/* TODO: obfuscate */}
        E-Mail: inquiry@borchert.me
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
        o. Ä.) entscheidet.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Speicherdauer
      </Headline>
      <Paragraph size="small" className="my-5">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
        dieser Website
      </Headline>
      <Paragraph size="small" className="my-5">
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
        Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
        ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten
        in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von
        Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
        oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
        Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
        zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist
        jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
        Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
        Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
        verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
        Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c
        DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
        berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über
        die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
        folgenden Absätzen dieser Datenschutzerklärung informiert.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </Headline>
      <Paragraph size="small" className="my-5">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO)
      </Headline>
      <Paragraph size="small" className="my-5">
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
        DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
        IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
        AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
        RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
        DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
        IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
        DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
        DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
        VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
      </Paragraph>
      <Paragraph size="small" className="my-5">
        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
        BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
        VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
        ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
        WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
        MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
        ABS. 2 DSGVO).
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </Headline>
      <Paragraph size="small" className="my-5">
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Recht auf Datenübertragbarkeit
      </Headline>
      <Paragraph size="small" className="my-5">
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Auskunft, Löschung und Berichtigung
      </Headline>
      <Paragraph size="small" className="my-5">
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
        dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
        Daten können Sie sich jederzeit an uns wenden.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Recht auf Einschränkung der Verarbeitung
      </Headline>
      <Paragraph size="small" className="my-5">
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
        folgenden Fällen:
      </Paragraph>
      <Paragraph size="small" className="my-5">
        • Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
        Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
        überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
        verlangen.
        <br />
        • Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
        geschah/geschieht, können Sie statt der Löschung die Einschränkung der
        Datenverarbeitung verlangen.
        <br />
        • Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
        jedoch zur Ausübung, Verteidigung oder Geltendmachung von
        Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
        verlangen.
        <br />• Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
        haben, muss eine Abwägung zwischen Ihren und unseren Interessen
        vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
        überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
        Ihrer personenbezogenen Daten zu verlangen.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        SSL- bzw. TLS-Verschlüsselung
      </Headline>
      <Paragraph size="small" className="my-5">
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Widerspruch gegen Werbe-E-Mails
      </Headline>

      <Paragraph size="small" className="my-5">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
        Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </Paragraph>
      <Headline tag="h2" className="mt-10">
        4. Datenerfassung auf dieser Website
      </Headline>
      <Headline tag="h3" className="mt-10">
        Server-Log-Dateien
      </Headline>
      <Paragraph size="small" className="my-5">
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log- Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </Paragraph>
      <Paragraph size="small" className="my-5">
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
      </Paragraph>
      <Headline tag="h3" className="mt-10">
        Anfrage per E-Mail, Telefon oder Telefax
      </Headline>
      <Paragraph size="small" className="my-5">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
        die Einwilligung ist jederzeit widerrufbar.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
        – bleiben unberührt.
      </Paragraph>
      <Paragraph size="small" className="my-5">
        Quelle:{" "}
        <Link
          href="https://www.e-recht24.de"
          text="https://www.e-recht24.de"
          target="_blank"
          rel="noreferrer"
        />
      </Paragraph>
    </ContentWrapper>
  </Layout>
);

export default PrivacyPolicy;
