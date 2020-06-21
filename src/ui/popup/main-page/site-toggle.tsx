import {m} from 'malevic';
import {isURLEnabled, isPDF} from '../../../utils/url';
import SiteToggle from '../components/site-toggle';
import ControlGroup from '../control-group';
import {ViewProps} from '../types';

export default function SiteToggleGroup(props: ViewProps) {
    const isPageEnabled = isURLEnabled(props.tab.url, props.data.settings, props.tab);
    const description = isPDF(props.tab.url) ?
        isPageEnabled ?
            'Enabled for PDF files' :
            'Disabled for PDF files' :
        isPageEnabled ?
            'Enabled for current website' :
            'Disabled for current website';
    return (
        <ControlGroup class="site-toggle-group">
            <ControlGroup.Control class="site-toggle-group__control">
                <SiteToggle {...props} />
            </ControlGroup.Control>
            <ControlGroup.Description>
                {description}
            </ControlGroup.Description>
        </ControlGroup>
    );
}
