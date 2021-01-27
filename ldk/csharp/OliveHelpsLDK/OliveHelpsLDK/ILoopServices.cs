using OliveHelpsLDK.Clipboard;
using OliveHelpsLDK.Cursor;
using OliveHelpsLDK.Filesystem;
using OliveHelpsLDK.Keyboard;
using OliveHelpsLDK.Network;
using OliveHelpsLDK.Process;
using OliveHelpsLDK.Configuration;
using OliveHelpsLDK.UI;
using OliveHelpsLDK.Whispers;
using OliveHelpsLDK.Window;

namespace OliveHelpsLDK
{
    public interface ILoopServices
    {
        IWhisperService Whisper { get; }

        IClipboardService Clipboard { get; }

        IFilesystemService Filesystem { get; }

        ICursorService Cursor { get; }

        IKeyboardService Keyboard { get; }

        INetworkService Network { get; }

        IProcessService Process { get; }

        // TODO: Uncomment once available in Olive Helps.
        // IBrowserService Browser { get ;}

        // TODO: Uncomment once available in Olive Helps.
        // IHoverService Hover { get; }

        IWindowService Window { get; }

        IConfigurationService Configuration { get; }

        IUIService UI { get; }
    }
}