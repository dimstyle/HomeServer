#! /usr/bin/bash
cd $(dirname "${BASH_SOURCE[0]}")/..

function usage(){
    echo "OPTIONS :"
    echo "-m | --memory <memoy_size G/M/K>"
    echo "-c | --cpu <cpu_core>"
    echo "-b | --base <base_name>"
    echo "-s | --serial <disk_serial_name>"
    echo "-cd | --cdrom <ubuntu_server_iso_name>"
    echo "-r | --root <root_path_of_vm>"
}

if [[ $# -lt 12 ]]; then 
    usage;
    exit 1
fi

xorriso -as mkisofs -V CIDATA -R -J seed/ -o seed.iso


while [[ $# -gt 0 ]]; do
    case $1 in
        -m|--memory)
            MEMORY=$2
            shift 2
            ;;
        -c|--cpu)
            CPU=$2
            shift 2
            ;;
        -b|--base)
            BASE=$2
            shift 2
            ;;
        -s|--serial)
            SERIAL=$2
            shift 2
            ;;
        -cd|--cdrom)
            CDROM=$2
            shift 2
            ;;
        -r|--root)
            ROOT=$2 
            shift 2
            ;;
        *) 
            usage;
            exit 1
            ;;
    esac
done

sudo qemu-system-x86_64 \
-m $MEMORY \
-smp $CPU \
-enable-kvm \
-drive if=pflash,format=raw,file=/usr/share/OVMF/OVMF_CODE.fd \
-drive if=pflash,format=raw,file=$ROOT/$BASE/OVMF_VARS.fd \
-drive file=$(pwd)/seed.iso,format=raw,if=virtio \
-drive file=$ROOT/cdrom/$CDROM,format=raw,if=virtio \
-drive file=$ROOT/$BASE/$BASE.qcow2,format=qcow2,if=none,id=drive0 \
-device virtio-blk-pci,drive=drive0,serial=$SERIAL \
-display spice-app
