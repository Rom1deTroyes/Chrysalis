// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2018, 2019, 2020  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const French = {
  language: "Français",
  errors: {
    deviceDisconnected: "Clavier déconnecté"
  },
  components: {
    layer: "Couche {{index}}",
    save: {
      success: "Enregistré !",
      saveChanges: "Enregistrer les modifications"
    },
    pickerColorButton: "Modifier la couleur"
  },
  dialog: {
    ok: "Ok",
    cancel: "Annuler"
  },
  app: {
    device: "Clavier",
    menu: {
      welcome: "Bonjour",
      editor: "Éditeur des couches et Dispositions & Colormap Editor",
      layoutEditor: "Éditeur des Dispositions",
      colormapEditor: "Colormap Editor",
      firmwareUpdate: "Mise à jour du microcode",
      keyboardSettings: "Paramètres du clavier",
      preferences: "Preferences",
      selectAKeyboard: "Choisir un clavier",
      selectAnotherKeyboard: "Choisir un autre clavier",
      chat: "Real-time chat",
      feedback: "Send feedback",
      exit: "Quitter Chrysalis",
      keyboardSection: "Clavier",
      chrysalisSection: "Chrysalis",
      miscSection: "Divers",
      upgradeAvailable: "Une mise à jour est disponible !"
    },
    deviceMenu: {
      Homepage: "Homepage",
      Forum: "Forum",
      Chat: "Chat"
    },
    cancelPending: {
      title: "Discard pending changes?",
      content: "Vous avez des modifications non enregistrées. Si vous continuez, elles seront perdues."
    }
  },
  editor: {
    keyType: "Key type",
    keyCode: "Key code",
    groups: {
      Letters: "Letters",
      Digits: "Digits",
      Punctuation: "Punctuation",
      Spacing: "Spacing",
      Modifiers: "Modifiers",
      Navigation: "Navigation",
      "Fx keys": "Fx keys",
      Numpad: "Numpad",
      Miscellaneous: "Miscellaneous",
      "Shift to layer": "Shift to layer",
      "Lock layer to": "Lock layer to",
      "LED Effect": "LED Effect",
      Macros: "Macros",
      Media: "Media",
      "Mouse movement": "Mouse movement",
      "Mouse button": "Mouse button",
      "Mouse wheel": "Mouse wheel",
      "Mouse warp": "Mouse warp",
      "OneShot modifiers": "OneShot modifiers",
      "OneShot layers": "OneShot layers",
      TapDance: "TapDance",
      Leader: "Leader",
      Steno: "Steno",
      SpaceCadet: "SpaceCadet",
      Blank: "Blank",
      "Unknown keycodes": "Unknown keycodes"
    },
    clearLayer: "Clear layer...",
    clearLayerQuestion: "Effacer la couche ?",
    clearLayerPrompt: "Cela va remettre la couche dans son état initial.",
    copyFrom: "Copier depuis la couche...",
    pleaseSelectLayer: "Veuillez sélectionner une couche...",
    dualUse: "Modificateurs quand pressée, touche normale autrement",
    dualUseLayer: "Décalage de couche quand pressée, touche normale autrement",
    layoutMode: "Modifier la disposition du clavier",
    colormapMode: "Edit the colormap",
    importExport: "Importer/Exporter la couche actuelle",
    importExportDescription:
      "Les données ci-dessous peuvent être éditées librement, ou copiées ailleurs pour être collées à nouveau pour importation. Ceci représente un état interne pour Chrysalis, manipuler avec précaussions !",
    loadDefault: "Charger valeur par défaut :",
    loadDefaultSuccess: "Valeurs par défaut chargées !",
    copyToClipboard: "Copier vers le presse-papier",
    copySuccess: "Copié !",
    pasteFromClipboard: "Coller depuis le presse-papier",
    pasteSuccess: "Collé !"
  },
  preferences: {
    devtools: "Outils Développeur",
    language: "Langue",
    interface: "Interface",
    advanced: "Réglages avancés",
    darkMode: "Thème sombre",
    verboseFocus: "Logging verbeux"
  },
  keyboardSettings: {
    advanced: "Avancé",
    keymap: {
      title: "Keymap settings",
      noDefault: "No default",
      showHardcoded: "Show hardcoded layers",
      onlyCustom: "Use custom layers only",
      defaultLayer: "Default layer"
    },
    led: {
      brightness: "Adjust LED brightness",
      idleDisabled: "Disabled",
      idleTimeLimit: "Idle time before LEDs turn off",
      idle: {
        oneMinute: "1 minute",
        twoMinutes: "2 minutes",
        threeMinutes: "3 minutes",
        fourMinutes: "4 minutes",
        fiveMinutes: "5 minutes",
        tenMinutes: "10 minutes",
        fifteenMinutes: "15 minutes",
        twentyMinutes: "20 minutes",
        thirtyMinutes: "30 minutes",
        sixtyMinutes: "60 minutes"
      }
    },
    advancedOps: "Advanced keyboard settings & operations",
    flash: {
      preferExternal: "Use an external program for flashing"
    },
    resetEEPROM: {
      button: "Reset EEPROM to factory defaults",
      dialogTitle: "Reset EEPROM to factory defaults?",
      dialogContents: `This will reset the EEPROM to factory defaults.
 You will lose all customizations made.`
    }
  },
  keyboardSelect: {
    unknown: "Inconnus",
    selectPrompt: "Choisir un clavier :",
    noDevices: "Pas de clavier trouvé !",
    connect: "Connexion",
    disconnect: "Déconnexion",
    scan: "Recharger les claviers",
    permissionError: `Permissions insuffisantes, veuillez vérifier que le fichier de périphérique est accessible en lecture et en écriture !`
  },
  firmwareUpdate: {
    dialog: {
      selectFirmware: "Choisir un microcode",
      firmwareFiles: "Fichiers microcode",
      allFiles: "Tout les fichiers"
    },
    options: {
      onFlash: "Restore to factory defaults when flashing",
      title: "Options de mise à jour du microcode"
    },
    flashing: {
      error: "Error flashing the microcode",
      troubleshooting: "Troubleshooting",
      success: "microcode flashed successfully!",
      button: "Update",
      buttonSuccess: "Updated!",
      steps: {
        factoryRestore: "Restoring factory defaults",
        bootloaderTrigger: "Triggering bootloader",
        bootloaderWait: "Waiting for bootloader",
        flash: "Flashing"
      }
    },
    confirmDialog: {
      title: "Replace the microcode and reset to factory defaults?",
      contents: `This will replace the microcode on the device, and reset all settings to factory defaults. You will lose all customizations made.`
    },
    defaultFirmware: "Chrysalis {{version}} default",
    defaultFirmwareDescription: "Minimal, without bells and whistles",
    experimentalFirmware: "Chrysalis {{version}} experimental",
    experimentalFirmwareDescription: "Experimental, with more plugins enabled",
    selected: "Selected microcode",
    custom: "Custom microcode",
    description: `Updating or "flashing" your keyboard's microcode is how we teach it new tricks. Chrysalis will install a new version of your keyboard's microcode which includes support pour personnaliser la disposition des touches (for customizing the key layout), as well as other features. If you've previously customized your keyboard's microcode, this will overwrite your custom microcode. You can always find the source code of the microcode Chrysalis is installing here:`,
    postUpload: `Once the upload is done, Chrysalis will take you back to the keyboard selection screen.`
  },
  welcome: {
    title: "Bienvenue dans Chrysalis",
    contents: `Chrysalis a reconnu votre clavier, mais une mise à jour du microcode est nécessaire avant de pouvoir continuer.`,
    gotoUpdate: "Mise à jour du microcode",
    reconnect: "Reconnexion",
    reconnectDescription: `There's a possibility that we misdetected the capabilities of the keyboard, or that the keyboard was starting up while we connected. In this case, you can try clicking the "{{buttonName}}" button to attempt a reconnect, and look for the necessary features again. Reconnecting is useful if you're sure there was a temporary failure upon previous attempts, and the problem has been resolved.`
  }
};

export { French as default };
